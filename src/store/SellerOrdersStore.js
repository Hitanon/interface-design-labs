import { makeAutoObservable } from "mobx";


export default class SellerOrdersStore {
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

  updateOrder(newOrder) {
    if (!this._isOrderExists(newOrder.id)) {
      return;
    }

    const index = this._orders.findIndex(order => order.id === newOrder.id);
    this._orders[index] = newOrder;
  }

  _isOrderExists(orderId) {
    return this._orders.some(order => order.id === orderId);
  }
}
