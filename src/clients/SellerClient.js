import { products } from "./ProductClient";


export const getSellerInfo = async (id) => {
  return {
    id: 1,
    name: "seller1",
    description: "description",
    rating: 5,
    sales: 100,
    sellsFrom: "2020-01-01T10:00:00",
    products: products,
  };
};

export const getSellerOrders = () => {
  return [
    {
      id: 1,
      createdAt: "2020-01-01T10:00:00",
      items: [
        {
          id: 1,
          statuses: [
            {
              id: 1,
              name: "Status1",
              startedAt: "2020-01-01T10:00:00",
              endedAt: "2020-01-01T12:00:00",
            },
            {
              id: 2,
              name: "Status2",
              startedAt: "2020-01-02T10:00:00",
              endedAt: null,
            },
          ],
        },
        {
          id: 2,
          createdAt: "2020-01-02T10:00:00",
          statuses: [
            {
              id: 1,
              name: "Status1",
              startedAt: "2020-01-01T10:00:00",
              endedAt: null,
            },
          ],
        },
      ],
    },
  ];
};

export const moveToNextStatus = async (id) => {
};
