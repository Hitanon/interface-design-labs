import { $host, $authHost } from ".";


export const getUserOrders = async () => {
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
    {
      id: 2,
      createdAt: "2020-01-02T10:00:00",
      items: [
        {
          id: 1,
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

export const authenticateUser = async (credentials) => {
  const response = await $host.post("/api/auth/login", credentials);
  return response.data.token;
};

export const logoutUser = async () => {
  await $authHost.post("/api/auth/logout");
};

export const getUserInfo = async () => {
  try {
    const response = await $authHost.get("/api/users/me");
    return response.data;
  } catch (e) {
    return null;
  }
};

export const registerUser = async (credentials) => {
  await $host.post("/api/users", credentials);
};
