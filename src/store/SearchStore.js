import { makeAutoObservable } from "mobx";


export default class SearchStore {
  constructor() {
    this._params = [];
    makeAutoObservable(this);
  }

  addParam(param) {
    this._params = this._params.filter(p => p.name !== param.name);
    this._params.push(param);
  }

  clearParam(name) {
    this._params = this._params.filter(p => p.name !== name);
  }

  get params() {
    return this._params;
  }
};
