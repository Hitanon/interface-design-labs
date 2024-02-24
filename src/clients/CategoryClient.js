import { $host } from "./index";


export const getTopCategories = async (limit) => {
  const response = await $host.get("/api/categories/top");
  return response.data;
};

export const getAllCategories = async () => {
  return [
    {
      id: 1,
      name: "category1",
    },
    {
      id: 2,
      name: "category2",
    },
    {
      id: 3,
      name: "category3",
    },
    {
      id: 4,
      name: "category4",
    },
    {
      id: 5,
      name: "category5",
    },
  ];
};
