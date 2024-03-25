import { makeAutoObservable } from "mobx";


export default class ProductStore {
  constructor() {
    this._id = 0;
    this._images = [];
    this._name = "";
    this._description = "";
    this._price = "";
    this._rating = 0;
    this._unitsInStock = 0;
    this._category = {};
    this._seller = {};
    this._comments = [];
    makeAutoObservable(this);
  }

  setProduct(product) {
    this._id = product.id;
    this._images = product.images;
    this._name = product.name;
    this._description = product.description;
    this._price = product.price;
    this._rating = product.rating;
    this._unitsInStock = product.unitsInStock;
    this._category = product.category;
    this._seller = product.seller;
    this._options = product.options;
    this._comments = product.comments;
  }

  get id() {
    return this._id;
  }

  get images() {
    return this._images;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  get rating() {
    return this._rating;
  }

  get unitsInStock() {
    return this._unitsInStock;
  }

  get category() {
    return this._category;
  }

  get seller() {
    return this._seller;
  }

  get options() {
    return this._options;
  }

  get comments() {
    return this._comments;
  }
}
