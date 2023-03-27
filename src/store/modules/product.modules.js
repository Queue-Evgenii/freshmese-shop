import { getProducts } from "/database";

const state = {};
const mutations = {};
const actions = {
  getProducts() {
    return new Promise((resolve, reject) => {
      getProducts()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("err getProducts", err);
          reject(err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
