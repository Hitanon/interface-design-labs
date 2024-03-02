import { makeAutoObservable } from "mobx";


export default class ProjectInfoStore {
  constructor() {
    this._phone = "";
    this._email = "";
    this._about = "";
    this._social = [];
    makeAutoObservable(this);
  }

  setInfo(info) {
    this._phone = info.phone;
    this._email = info.email;
    this._about = info.about;
    this._social = info.social;
  }

  get phone() {
    return this._phone;
  }

  get email() {
    return this._email;
  }

  get about() {
    return this._about;
  }

  get social() {
    return this._social;
  }
}
