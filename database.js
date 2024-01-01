const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.48,
    first_price: 2.24,
    categoryId: 1,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [
      {
        id: 0,
        user_name: "Dmitriy",
        question: "What about quality?",
      },
      {
        id: 1,
        user_name: "Alex",
        question:
          "CookingCookingCooking! CookingCookingCooking Cooking Cooking? CookingCookingCookingCooking Cooking CookingCooking Cooking CookingCookingCooking Cooking?",
      },
    ],
    vitamins: [],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 0.28,
    first_price: null,
    categoryId: 2,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: null,
    sku: "76645",
    questions: [],
    vitamins: [],
    big_description: "",
    gallery: [],
    feedbacks: [
      {
        id: 0,
        user_name: "Men",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.12,
    first_price: 4.56,
    categoryId: 1,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields 2",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [
      "https://loremflickr.com/360/640",
      "https://loremflickr.com/360/640",
      "https://loremflickr.com/360/640",
    ],
    questions: [],
    vitamins: [],
    big_description:
      "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.\n",
    feedbacks: [
      {
        id: 0,
        rating: 5,
        user_name: "Alex",
        text: "good product",
      },
    ],
  },
  {
    id: 4,
    name: "Product 1",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.48,
    first_price: null,
    categoryId: 1,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields 2",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: null,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "Tratatata",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 5,
    name: "Product 2",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 0.28,
    first_price: null,
    categoryId: 2,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: null,
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: null,
    sku: "76645",
    gallery: [],
    questions: [
      {
        id: 0,
        user_name: "Mary",
        question: "What about quality?",
      },
      {
        id: 1,
        user_name: "Alex",
        question: "No more questions! Great product. Could i have some?",
      },
    ],
    vitamins: [
      {
        id: 1,
        name: "Thiamine (B1)",
        quantity: "0.066 mg",
        dv: "6 %",
      },
      {
        id: 2,
        name: "Niacin (B3)",
        quantity: "0.983 mg",
        dv: "7 %",
      },
      {
        id: 4,
        name: "Vitamin C",
        quantity: "5.9 mg",
        dv: "7 %",
      },
      {
        id: 5,
        name: "Vitamin E",
        quantity: "0.66 mg",
        dv: "4 %",
      },
      {
        id: 6,
        name: "Vitamin K",
        quantity: "13.2",
        dv: "13 %",
      },
    ],
    big_description:
      "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.\n",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 5,
        text: "good product",
      },
      {
        id: 1,
        user_name: "John",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 6,
    name: "Product 3",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.12,
    first_price: null,
    categoryId: 2,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "I love this farm",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "eugen",
        rating: 2,
        text: "good product",
      },
    ],
  },
  {
    id: 7,
    name: "Product 1",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.48,
    first_price: null,
    categoryId: 3,
    freshness: "new (extra fresh)",
    quantity: 3,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: null,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [
      {
        id: 0,
        name: "Vitamin A equiv.",
        quantity: "735 ug",
        dv: "104 %",
      },
      {
        id: 1,
        name: "Thiamine (B1)",
        quantity: "0.066 mg",
        dv: "6 %",
      },
      {
        id: 5,
        name: "Vitamin E",
        quantity: "0.66 mg",
        dv: "4 %",
      },
      {
        id: 6,
        name: "Vitamin K",
        quantity: "13.2",
        dv: "13 %",
      },
    ],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 8,
    name: "Product 2",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 0.28,
    first_price: null,
    categoryId: 2,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: null,
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description:
      "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 3,
        text: "good product",
      },
    ],
  },
  {
    id: 9,
    name: "Product 3",
    image: "https://loremflickr.com/640/360",
    description: "favorite apples",
    price: 1.12,
    first_price: null,
    categoryId: 3,
    freshness: "new (extra fresh)",
    quantity: 5,
    quantity_measure: "pcs",
    farm: null,
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [
      "https://loremflickr.com/640/360",
      "https://loremflickr.com/360/360",
    ],
    questions: [
      {
        id: 0,
        user_name: "Max",
        question: "What about quality?",
      },
      {
        id: 1,
        user_name: "Kris",
        question:
          "No more questions! Great product. Could i have some? No more questions! Great product. Could i have some?",
      },
    ],
    vitamins: [
      {
        id: 0,
        name: "Vitamin A equiv.",
        quantity: "735 ug",
        dv: "104 %",
      },
      {
        id: 1,
        name: "Thiamine (B1)",
        quantity: "0.066 mg",
        dv: "6 %",
      },
      {
        id: 2,
        name: "Niacin (B3)",
        quantity: "0.983 mg",
        dv: "7 %",
      },
      {
        id: 3,
        name: "Folate (Bg)",
        quantity: "19 ug",
        dv: "5 %",
      },
      {
        id: 4,
        name: "Vitamin C",
        quantity: "5.9 mg",
        dv: "7 %",
      },
      {
        id: 5,
        name: "Vitamin E",
        quantity: "0.66 mg",
        dv: "4 %",
      },
      {
        id: 6,
        name: "Vitamin K",
        quantity: "13.2",
        dv: "13 %",
      },
    ],
    big_description:
      "Origins\nWe work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.\n\nHow to cook\nFrom roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 4,
        text: "good product",
      },
      {
        id: 1,
        user_name: "Mary",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 10,
    name: "Carrot extra",
    image: "https://loremflickr.com/640/360",
    description: "favorite carrot from farmers",
    price: 2.12,
    first_price: 4.2,
    categoryId: 9,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 2,
        text: "good product",
      },
    ],
  },
  {
    id: 11,
    name: "Good Product",
    image: "https://loremflickr.com/640/360",
    description: "favorite product from home",
    price: 2.12,
    first_price: 2.24,
    categoryId: 4,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: null,
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [],
  },
  {
    id: 12,
    name: "Food food food",
    image: "https://loremflickr.com/360/360",
    description: "good meal",
    price: 2.99,
    first_price: null,
    categoryId: 2,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "New Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [
      {
        id: 0,
        user_name: "Alex",
        rating: 5,
        text: "good product",
      },
    ],
  },
  {
    id: 13,
    name: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "https://loremflickr.com/360/640",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    price: 3.16,
    first_price: 4.16,
    categoryId: 13,
    freshness: "new (extra fresh)",
    quantity: 320,
    quantity_measure: "pcs",
    farm: "Grocery Farm Fields",
    delivery_area: "Europe",
    delivery: "in two days",
    shipping_price: 0.55,
    sku: "76645",
    gallery: [],
    questions: [],
    vitamins: [],
    big_description: "",
    feedbacks: [],
  },
];

const setAvarageRating = () => {
  products.forEach((product) => {
    let result = 0;
    product.feedbacks.forEach((item) => {
      result += item.rating;
    });
    result /= product.feedbacks.length;
    product.rating = result;
  });
};
setAvarageRating();

const getProductByCatId = (id) => {
  if (!products.find((item) => item.categoryId === id)) {
    return [];
  }
  return products.filter((item) => item.categoryId === id);
};
export const getProductByCategoryId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getProductByCatId(id));
    }, 1000);
  });
};

const categories = [
  {
    id: 1,
    name: "Bakery",
    url: "bakery",
    best_seller: false,
    from_farmers: false,
    children: [
      {
        id: 1,
        name: "bakery 1",
        url: "bakery",
      },
      {
        id: 2,
        name: "bakery 2",
        url: "bakery",
      },
      {
        id: 3,
        name: "bakery 3",
        url: "bakery",
      },
      {
        id: 4,
        name: "bakery 4",
        url: "bakery",
      },
      {
        id: 5,
        name: "bakery 5",
        url: "bakery",
      },
    ],
    products: getProductByCatId(1),
  },
  {
    id: 2,
    name: "Fruit and vegetables",
    url: "fruits-and-vegetables",
    best_seller: false,
    from_farmers: true,
    children: [
      {
        id: 1,
        name: "apples",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 2,
        name: "bananas",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 3,
        name: "cucumbers",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 4,
        name: "melons",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 5,
        name: "pears",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 6,
        name: "Carrots",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 7,
        name: "Tomatoes",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
      {
        id: 8,
        name: "Potatoes",
        best_seller: false,
        url: "fruits-and-vegetables",
      },
    ],
    products: getProductByCatId(2),
  },
  {
    id: 3,
    name: "Meat and fish",
    url: "meat-and-fish",
    best_seller: true,
    from_farmers: false,
    children: [
      {
        id: 1,
        name: "Chicken",
        best_seller: true,
        from_farmers: true,
        url: "meat-and-fish",
      },
      {
        id: 2,
        name: "Pork",
        best_seller: false,
        from_farmers: true,
        url: "meat-and-fish",
      },
      {
        id: 3,
        name: "Beaf",
        best_seller: true,
        from_farmers: true,
        url: "meat-and-fish",
      },
    ],
    products: getProductByCatId(3),
  },
  {
    id: 4,
    name: "Drinks",
    url: "drinks",
    best_seller: false,
    from_farmers: false,
    children: [],
    products: getProductByCatId(4),
  },
  {
    id: 5,
    name: "Kitchen",
    url: "kitchen",
    best_seller: true,
    from_farmers: false,
    children: [],
    products: getProductByCatId(5),
  },
  {
    id: 6,
    name: "Special nutrition",
    url: "special-nutrition",
    best_seller: true,
    from_farmers: false,
    children: [
      {
        id: 1,
        name: "nutrition",
      },
    ],
    products: getProductByCatId(6),
  },
  {
    id: 7,
    name: "Pharmacy",
    url: "pharmacy",
    best_seller: true,
    from_farmers: false,
    children: [],
    products: getProductByCatId(7),
  },
  {
    id: 8,
    name: "Baby",
    url: "baby",
    best_seller: true,
    from_farmers: false,
    children: [],
    products: getProductByCatId(8),
  },
];

const setProductCategory = () => {
  products.forEach((product) => {
    product.category = categories.find(
      (item) => item.id === product.categoryId
    );
  });
};
setProductCategory();
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id == productId);
    if (product) {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    } else {
      reject(new Error("Product not found"));
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

export const getBrands = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = [];
      products.forEach((item) => {
        if (item.farm && !arr.find((el) => el === item.farm))
          arr.push(item.farm);
      });
      resolve(arr);
    }, 1000);
  });
};
