import { getProductById, getProducts, getProductByCategoryId } from "/database";

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
  getProductById(_, data) {
    return new Promise((resolve, reject) => {
      getProductById(data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("getProductById err", err);
          reject(err);
        });
    });
  },
  getProductByCategoryId(_, data) {
    return new Promise((resolve, reject) => {
      getProductByCategoryId(data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log("getProductByCategoryId err", err);
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
