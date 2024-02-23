const products = [
  {
    id: 1,
    name: "product1",
    price: 100,
    unitsInStock: 10,
    seller: {
      id: 1,
      name: "seller1",
    },
  },
  {
    id: 2,
    name: "product2",
    price: 200,
    unitsInStock: 20,
    seller: {
      id: 2,
      name: "seller2",
    },
  },
];


export const getTopProducts = async (limit) => {
  return products;
};

export const getProduct = async (id) => {
  return {
    id: 1,
    images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    name: "product1",
    description: "description",
    price: 100,
    rating: 5,
    unitsInStock: 10,
    category: {
      id: 1,
      name: "category1",
    },
    seller: {
      id: 1,
      name: "seller1",
    },
    options: [
      {
        id: 1,
        name: "option1",
        values: [
          {
            id: 1,
            name: "value1",
          },
          {
            id: 2,
            name: "value2",
          },
        ],
      },
    ],
    comments: [
      {
        rating: 4,
        text: "text1",
        author: {
          id: 1,
          name: "author1",
        },
      },
      {
        rating: 5,
        text: "text2",
        author: {
          id: 2,
          name: "author2",
        },
      },
    ],
  };
};


export const searchProductsByParams = (params) => {
  return products;
};
