import { makeAutoObservable } from "mobx";

export default class ProjectInfoStore {
  constructor() {
    this._phone = "";
    this._email = "";
    this._about = "";
    this._social = {};
    makeAutoObservable(this);
  }

  setInfo(info) {
    this.setPhone(info.phone);
    this.setEmail(info.email);
    this.setAbout(info.about);
    this.setSocial(info.social);
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
