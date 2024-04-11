import { makeAutoObservable } from "mobx";


export default class EditProductStore {
  constructor() {
    this.setDelautlValues();
    makeAutoObservable(this);
  }

  get images() {
    return this._images;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  get unitsInStock() {
    return this._unitsInStock;
  }

  get category() {
    return this._category;
  }

  setImages(images) {
    this._images = images;
  }

  setName(name) {
    this._name = name;
  }

  setDescription(description) {
    this._description = description;
  }

  setPrice(price) {
    this._price = price;
  }

  setUnitsInStock(unitsInStock) {
    this._unitsInStock = unitsInStock;
  }

  setCategory(category) {
    this._category = category;
  }

  clear() {
    this.setDelautlValues();
  }

  clearCategory() {
    this.setDefaultCategory();
  }

  setDelautlValues() {
    this._images = [];
    this._name = "";
    this._description = "";
    this._price = 0;
    this._unitsInStock = 0;
    this.setDefaultCategory();
  }

  setDefaultCategory() {
    this._category = 0;
  }

  setProduct(product) {
    this._images = [];
    this._name = product.name;
    this._description = product.description;
    this._price = product.price;
    this._unitsInStock = product.unitsInStock;
    this._category = product.category.id;
  }
}
