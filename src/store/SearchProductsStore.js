import { makeAutoObservable } from "mobx";


export default class SearchProductsStore {
  constructor() {
    this._params = {};
    this._products = [];
    makeAutoObservable(this);
  }

  setParams(params) {
    this._params = params;
  }

  get params() {
    return this._params;
  }

  setProducts(products) {
    this._products = products;
  }

  get products() {
    return this._products;
  }

  setCategory(id) {
    this._params.category = id;
  }
};
