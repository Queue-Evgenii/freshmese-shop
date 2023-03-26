const database = {
  products: [
    {
      id: 1,
      name: "Product 1",
      description: "favorite apples",
      price: 1.48,
      categoryId: 1,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      description: "favorite apples",
      price: 0.28,
      categoryId: 2,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      description: "favorite apples",
      price: 1.12,
      categoryId: 1,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 4,
      name: "Product 1",
      description: "favorite apples",
      price: 1.48,
      categoryId: 1,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 5,
      name: "Product 2",
      description: "favorite apples",
      price: 0.28,
      categoryId: 2,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 6,
      name: "Product 3",
      description: "favorite apples",
      price: 1.12,
      categoryId: 2,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 7,
      name: "Product 1",
      description: "favorite apples",
      price: 1.48,
      categoryId: 1,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 8,
      name: "Product 2",
      description: "favorite apples",
      price: 0.28,
      categoryId: 2,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
    {
      id: 9,
      name: "Product 3",
      description: "favorite apples",
      price: 1.12,
      categoryId: 3,
      freshness: 1,
      farm: "Grocery Farm Fields",
      deliveryArea: "Europe",
      delivery: "in two days",
      feedbacks: [
        {
          id: 0,
          rating: 5,
          text: "good product",
        },
      ],
    },
  ],
  categories: [
    {
      id: 1,
      name: "Category 1",
      // products: this.products.filter((item) => item.categoryId === this.id),
    },
    {
      id: 2,
      name: "Category 2",
      // products: this.products.filter((item) => item.categoryId === this.id),
    },
    {
      id: 3,
      name: "Category 3",
      // products: this.products.filter((item) => item.categoryId === this.id),
    },
  ],
};

// export const getProductByCategoryId = (id) => {
//   if (database.products.find((item) => item.categoryId === id)) {
//     return database.products.filter((item) => (item.categoryId = id));
//   }
//   return [];
// };
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database.products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = database.products.find((p) => p.id === productId);
    if (product) {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    } else {
      reject(new Error("Продукт не найден"));
    }
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database.categories);
    }, 1000);
  });
};
