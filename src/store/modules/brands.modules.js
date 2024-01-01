import { getBrands } from "../../../database";

const actions = {
  getBrands() {
    return new Promise((resolve, reject) => {
      getBrands()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("getBrands err", err);
          reject(err);
        });
    });
  },
};

export default {
  actions,
};
