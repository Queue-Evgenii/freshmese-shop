import { createStore } from "vuex";
import productModules from "./modules/product.modules";
import categoryModules from "./modules/category.modules";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productModules,
    categoryModules,
  },
});
