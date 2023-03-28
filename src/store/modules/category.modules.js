import { getCategories } from "/database";

const state = {};
const mutations = {};
const actions = {
  getCategories() {
    return new Promise((resolve, reject) => {
      getCategories()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("err getCategories", err);
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
