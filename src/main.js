import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import components from "./build/build.components";
import "../css/style.scss"

Vue.use(components);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
