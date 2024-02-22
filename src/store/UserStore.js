import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._username = "";
    this._orders = [];
    makeAutoObservable(this);
  }

  setIsAuth(isAuth) {
    this._isAuth = isAuth;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUsername(username) {
    this._username = username;
  }

  get username() {
    return this._username;
  }

  setOrders(orders) {
    this._orders = orders;
  }

  get orders() {
    return this._orders;
  }
}
