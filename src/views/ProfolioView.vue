<template>
  <v-main>
    <!-- search -->
    <v-row no-gutters>
      <v-col
        sm="6"
        md="6"
        cols="12"
      >
        <v-text-field
          v-model="search.text"
          label="快速搜尋"
          outlined
          dense
          clearable
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- chips -->
    <v-row
      justify="space-around"
      no-gutters
    >
      <v-col cols="12">
        <v-chip-group
          active-class="primary--text"
          v-model="search.chip"
        >
          <v-chip
            v-for="mark in marks"
            :key="mark.id"
            :value="mark.id"
            outlined
          >
            <!-- avatar -->
            <v-avatar left>
              <v-img
                v-if="mark.type=='img'"
                :src="mark.img"
                contain
              >
                <template v-slot:placeholder>
                  <v-icon color="indigo">
                    {{mark.img}}
                  </v-icon>
                </template>
              </v-img>
              <v-icon
                v-else
                color="indigo"
              >
                {{mark.img}}
              </v-icon>
            </v-avatar>
            <!-- title -->
            {{ mark.title }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <!-- data -->
    <v-row
      no-gutters
      class="mt-12"
    >
      <v-col
        md="3"
        sm="4"
        cols="12"
        v-for="(item,index) in resultData"
        :key="index"
        class="px-2 pt-4"
      >

        <v-hover
          v-slot="{ hover }"
          open-delay="200"
        >
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            max-width="600"
          >
            <v-img
              :src="item.img"
              contain
              class="black--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
             <v-icon size="150">
               mdi-image-area 
             </v-icon>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="font-weight-bold">{{item.title}}</v-card-title>
            <v-card-text>
              <v-chip
                v-for="mark in item.mark"
                :key="mark.id"
                class="mr-1 mt-1"
                outlined
              >
                <!-- avatar -->
                <v-avatar left>
                  <v-img
                    v-if="mark.type=='img'"
                    :src="mark.img"
                    contain
                  >
                    <template v-slot:placeholder>
                      <v-icon color="indigo">
                        {{mark.img}}
                      </v-icon>
                    </template>
                  </v-img>
                  <v-icon
                    v-else
                    color="indigo"
                  >
                    {{mark.img}}
                  </v-icon>
                </v-avatar>
                <!-- title -->
                <div class="align-end">
                  {{ mark.title }}
                </div>
              </v-chip>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="indigo"
                text
                @click="()=>goTo(item.url)"
              >
                Go
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <!-- alert -->
      <v-col cols="12">
        <v-alert
          type="info"
          text
          v-if="resultData.length==0 && profolio.length!=0"
          dense
        >
          查無資料
        </v-alert>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import profolio from "@/assets/JSON/profolio.json";
import mark from "@/assets/JSON/chips.json";

export default {
  created() {
    const self = this;
    self.profolio = profolio;
    self.marks = mark;
    self.changeChips();
  },
  data() {
    return {
      search: {
        text: "",
        chip: 0,
      },
      profolio: [],
      marks: [],
    };
  },
  computed: {
    resultData: function () {
      const self = this;
      let search = self.search;
      var list = [];

      list = self.profolio.filter((item) => {
        var conText =
          search.text == "" ? true : item.title.indexOf(search.text) != -1;
        var conChip =
          search.chip == 0 || search.chip == undefined
            ? true
            : (() => {
                var result = false;
                if (
                  item.mark.find((element) => search.chip == element.id) !=
                  undefined
                )
                  result = true;
                return result;
              })();
        return conText && conChip;
      });
      return list;
    },
  },
  methods: {
    goTo: function (url) {
      window.open(url);
    },
    changeChips: function () {
      const self = this;
      self.profolio.forEach((item) => {
        let ary = [];
        item.mark.forEach((marker) => {
          let found = self.marks.find((element) => element.id == marker);
          if (found != undefined) ary.push(found);
        });
        item.mark = ary;
      });
    },
  },
};
</script>

<style lang="scss" scope>
* {
  font-family: Microsoft JhengHei;
  .v-card.v-img {
    transition: opacity 0.4s ease-in-out;
  }
  .v-card.v-img:not(.on-hover) {
    opacity: 0.7;
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>