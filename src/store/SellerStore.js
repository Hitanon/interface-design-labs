import { makeAutoObservable } from "mobx";

export default class SellerStore {
  constructor() {
    this._id = 0;
    this._name = "";
    this._description = "";
    this._rating = 0;
    this._sales = 0;
    this._sellsFrom = "";
    this._products = [];
    makeAutoObservable(this);
  }

  setInfo(info) {
    this._id = info.id;
    this._name = info.name;
    this._description = info.description;
    this._rating = info.rating;
    this._sales = info.sales;
    this._sellsFrom = info.sellsFrom;
    this._products = info.products;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get rating() {
    return this._rating;
  }

  get sales() {
    return this._sales;
  }

  get sellsFrom() {
    return this._sellsFrom;
  }

  get products() {
    return this._products;
  }
}
