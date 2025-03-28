import { makeAutoObservable } from "mobx";


export default class CustomerProfileStore {
  constructor() {
    this._orders = [];
    makeAutoObservable(this);
  }

  setOrders(orders) {
    this._orders = orders;
  }

  get orders() {
    return this._orders;
  }
}
