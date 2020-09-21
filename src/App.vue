<template>
  <v-app>
    <header-bar title-text="vue-common-components Demo">
      <template v-slot:tool-bar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" icon @click="openGitHub">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>GitHubを開く</span>
        </v-tooltip>
      </template>
    </header-bar>
    <v-main>
      <sample />
    </v-main>
    <footer-bar copyright="gn5r" />
  </v-app>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
import FooterBar from "@/components/common/FooterBar";
import Sample from "@/components/Sample";

export default {
  name: "App",

  components: { HeaderBar, FooterBar, Sample },

  data: () => ({}),
  methods: {
    // Github repositoryページを新規タブで開く
    openGitHub() {
      const uri = "https://github.com/gn5r/vue-common-components";
      window.open(uri, "GitHub");
    },
  },
};
</script>
