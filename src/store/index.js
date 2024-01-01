import { createStore } from "vuex";
import productModules from "./modules/product.modules";
import categoryModules from "./modules/category.modules";
import brandsModules from "@/store/modules/brands.modules";

export default createStore({
  state: {
    cartList: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productModules,
    categoryModules,
    brandsModules,
  },
});
