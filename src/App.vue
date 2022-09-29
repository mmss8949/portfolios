<template>
  <v-app>
    <!-- <v-app-bar
      color="indigo"
      class="flex-grow-0"
      app
      dark
    >
      <v-app-bar-title>Coding Beauty</v-app-bar-title>
    </v-app-bar> -->
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      expand-on-hover
      width="300"
      mini-variant-width="80"
      :mini-variant.sync="mini"
    > -->
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="info.img"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Cash Wang</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          @click.stop="goToPage(item.page)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menu from "@/assets/JSON/menu.json";
import me from "@/assets/img/me.jpg";

export default {
  name: "App",

  data: () => ({
    menu: [],
    info:{
      img:""
    },
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
  }),
  created() {
    const self = this;
    self.menu = menu;
    self.info.img = me;
  },

  methods: {
    goToPage(page) {
      const self = this;
      console.log(page)
      if (self.$route.path != page) self.$router.push(page);
    },
  },
};
</script>
