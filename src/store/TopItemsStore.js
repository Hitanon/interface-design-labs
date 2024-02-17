import { makeAutoObservable } from "mobx";


export default class TopItemsStore {
  constructor() {
    this._categories = [];
    this._products = [];
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  get categories() {
    return this._categories;
  }

  setProducts(products) {
    this._products = products;
  }

  get products() {
    return this._products;
  }
}
