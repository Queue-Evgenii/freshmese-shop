import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LayoutDefault from "@/layouts/LayoutDefault.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("layout-default", LayoutDefault)
  .mount("#app");
