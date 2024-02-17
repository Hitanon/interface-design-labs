export const getTopProducts = async (limit) => {
  return [
    {
      id:1,
      name: "product1",
      price: 100,
      unitsInStock: 10,
      seller: {
        id: 1,
        name: "seller1",
      },
    },
    {
      id:2,
      name: "product2",
      price: 200,
      unitsInStock: 20,
      seller: {
        id: 2,
        name: "seller2",
      },
    },
  ];
};
