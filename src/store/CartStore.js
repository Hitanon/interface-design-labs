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

  // addItem(item, quantity) {
  //   const index = this._items.findIndex((i) => i.item.id === item.id);
  //   if (index === -1) {
  //     this._items.push({ item, quantity });
  //   }
  //   else {
  //     this._items[index].quantity += quantity;
  //   }
  // }

  // removeItem(item, quantity) {
  //   const index = this._items.findIndex((i) => i.item.id === item.id);
  //   if (index === -1) {
  //     return;
  //   }

  //   this._items[index].quantity -= quantity;
  //   if (this._items[index].quantity <= 0) {
  //     this._items.splice(index, 1);
  //   }
  // }

  // get items() {
  //   return this._items;
  // }

  // get itemsCount() {
  //   return this._items.reduce((sum, item) => sum + item.quantity, 0);
  // }
}
