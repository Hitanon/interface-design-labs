import { makeAutoObservable } from "mobx";


export default class SearchStore {
  constructor() {
    this._params = [];
    this._orderBy = "";
    makeAutoObservable(this);
  }

  addParam(param) {
    this._params = this._params.filter(p => p.name !== param.name);
    this._params.push(param);
  }

  clearParam(name) {
    this._params = this._params.filter(p => p.name !== name);
  }

  clearParams() {
    this._params = [];
  }

  get params() {
    return this._params;
  }

  setOrderBy(orderBy) {
    this._orderBy = orderBy;
  }

  clearOrderBy() {
    this._orderBy = "";
  }

  get orderBy() {
    return this._orderBy;
  }
};
