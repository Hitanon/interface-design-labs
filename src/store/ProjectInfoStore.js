import { makeAutoObservable } from "mobx";

export default class ProjectInfoStore {
  constructor() {
    this._phone = "";
    this._email = "";
    this._about = "";
    this._social = {};
    makeAutoObservable(this);
  }

  setPhone(phone) {
    this._phone = phone;
  }

  get phone() {
    return this._phone;
  }

  setEmail(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  setAbout(about) {
    this._about = about;
  }

  get about() {
    return this._about;
  }

  setSocial(social) {
    this._social = social;
  }

  get social() {
    return this._social;
  }

  setInfo(info) {
    this.setPhone(info.phone);
    this.setEmail(info.email);
    this.setAbout(info.about);
    this.setSocial(info.social);
  }
}
