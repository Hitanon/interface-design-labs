import { makeAutoObservable } from "mobx";


export default class StatusesStore {
  constructor() {
    this._statuses = [];
    makeAutoObservable(this);
  }

  get statuses() {
    return this._statuses;
  }

  setStatuses(statuses) {
    this._statuses = statuses;
  }

  isEmpty() {
    return this._statuses.length === 0;
  }
}
