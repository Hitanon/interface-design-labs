import { useContext } from "react";

import { Context } from "..";
import { getSellerProfile, updateSellerProfile } from "../clients/SellerClient";
import { createProduct, deleteProduct, updateProduct } from "../clients/ProductClient";
import { moveToNextStatus } from "../clients/GeneralClient";


const useSeller = () => {
  const { sellerProfile } = useContext(Context);

  const updateProfileProducts = async () => {
    const profile = await getSellerProfile();
    sellerProfile.setProducts(profile.products);
  };

  const updateProfileOrders = async () => {
    const profile = await getSellerProfile();
    sellerProfile.setOrders(profile.orders);
  };

  const loadProfile = async () => {
    sellerProfile.setProfile(await getSellerProfile());
  };

  const updateDescription = async (description) => {
    await updateSellerProfile({ description });
    sellerProfile.setDescription(description);
  };

  const buildFormdata = (images, name, description, price, unitsInStock, category) => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("unitsInStock", unitsInStock);
    formdata.append("category", category);
    images.forEach((image, index) => {
      formdata.append(`images[${index}]`, image);
    });
    return formdata;
  };

  const create = async (images, name, description, price, unitsInStock, category) => {
    await createProduct(buildFormdata(images, name, description, price, unitsInStock, category));
    updateProfileProducts();
  };

  const update = async (id, images, name, description, price, unitsInStock, category) => {
    await updateProduct(id, buildFormdata(images, name, description, price, unitsInStock, category));
    updateProfileProducts();
  };

  const delete_ = async (id) => {
    await deleteProduct(id);
    updateProfileProducts();
  };

  const move = async (id, details) => {
    await moveToNextStatus(id, details === "" ? null : details);
    updateProfileOrders();
  };

  return {
    loadProfile,
    updateDescription,
    createProduct: create,
    updateProduct: update,
    deleteProduct: delete_,
    moveOrder: move,
  };
};

export default useSeller;
