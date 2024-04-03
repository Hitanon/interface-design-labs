import { makeAutoObservable } from "mobx";


export default class SellerProfileStore {
  constructor() {
    this._name = "";
    this._description = "";
    this._balance = 0;
    this._products = [];
    this._orders = [];
    makeAutoObservable(this);
  }

  setProfile(profile) {
    this._name = profile.name;
    this._description = profile.description;
    this._products = profile.products;
    this._orders = profile.orders;
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  get description() {
    return this._description;
  }

  setDescription(description) {
    this._description = description;
  }

  get products() {
    return this._products;
  }

  setProducts(products) {
    this._products = products;
  }

  get orders() {
    return this._orders;
  }

  setOrders(orders) {
    this._orders = orders;
  }
}
