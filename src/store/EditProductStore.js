import { makeAutoObservable } from "mobx";


export default class EditProductStore {
  constructor() {
    this.setDelautlValues();
    makeAutoObservable(this);
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
    this._name = "";
    this._description = "";
    this._price = 0;
    this._unitsInStock = 0;
    this.setDefaultCategory();
  }

  setDefaultCategory() {
    this._category = 0;
  }
}
