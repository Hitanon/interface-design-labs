import { $host } from ".";

export const getSellerInfo = async (id) => {
  const response = await $host.get(`/api/sellers/${id}`);
  return response.data;
};

export const registerSeller = async (credentials) => {
  await $host.post("/api/sellers", credentials);
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

export const getSellerOrder = async (id) => {
  return {
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
            endedAt: "2020-01-02T12:00:00",
          },
          {
            id: 3,
            name: "Status3",
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
  };
};
