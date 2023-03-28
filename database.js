const products = [
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
];
export const getProductByCategoryId = (id) => {
  if (products.find((item) => item.categoryId === id)) {
    return products.filter((item) => (item.categoryId = id));
  }
  return [];
};

const categories = [
  {
    id: 1,
    name: "Bakery",
  },
  {
    id: 2,
    name: "Fruit and vegetables",
  },
  {
    id: 3,
    name: "Meat and fish",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === productId);
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
      resolve(categories);
    }, 1000);
  });
};
