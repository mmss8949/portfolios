<template>
  <v-main>
    <div class="text-h1 font-weight-medium mb-10">About me</div>
    <v-card class="px-10 py-10">
      <v-list-item>
        <v-list-item-avatar
          size="130"
          color="grey"
          rounded="circle"
        >
          <v-img
            :src="info.img"
            alt="Cash"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>

          <v-list-item-title class="text-h4">
            {{info.profile.name}}
          </v-list-item-title>

          <div class="text-h6">
            {{info.profile.title}}
          </div>
          <div class="text-subtitle-1">
            {{info.profile.email}}
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="py-3"></v-divider>
      <v-card-text>
        <!-- Experience -->
        <div class="text-h4">Experience</div>
        <v-timeline
          dense
          class="mt-5"
        >
          <v-timeline-item
            v-for="(item) in info.profile.timeline"
            :key="item.id"
            :color="item.color"
            small
          >
            <v-row class="pt-1">
              <v-col cols="1">
                <strong :class="`${item.color}--text text-h6`">{{item.time}}</strong>
              </v-col>
              <v-col>
                <strong :class="`${item.color}--text text-h6`">{{item.title}}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
        <v-divider class="my-10"></v-divider>
        <!-- Skill -->
        <div class="text-h4">Skill</div>
        <v-row
          no-gutters
          class="mt-5"
        >
          <v-chip
            v-for="mark in info.profile.skill"
            :key="mark.id"
            :value="mark.id"
            outlined
            large
            class="ml-4"
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
        </v-row>
      </v-card-text>
    </v-card>
  </v-main>
</template>
<script>
import me from "@/assets/img/me.jpg";
import info from "@/assets/JSON/about.json";

export default {
  data() {
    return {
      info: {
        img: "",
        profile: {},
        timeline: [],
      },
    };
  },
  created() {
    const self = this;
    self.info.img = me;
    self.info.profile = info;
  },
};
</script>
