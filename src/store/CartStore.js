import { makeAutoObservable } from "mobx";


export default class CartStore {
  constructor() {
    this._items = [];
    makeAutoObservable(this);
  }

  setItems(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get itemsCount() {
    return this._items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
