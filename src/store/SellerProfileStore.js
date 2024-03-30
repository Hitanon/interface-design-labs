export default class SellerProfileStore {
  constructor() {
    this._products = [];
  }

  get products() {
    return this._products;
  }

  setProducts(products) {
    this._products = products;
  }
}
