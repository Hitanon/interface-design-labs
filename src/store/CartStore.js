import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._items = [
      {
        id: 1,
        name: "Старый деревянный рабочий стол",
        price: 33500,
        quantity: 1,
        images: ["/img/table.png"],
        seller: { id: 1, name: "Seller1" },
        rating: 4.8,
        unitsInStock: 5,
      },
      {
        id: 2,
        name: "Минималистичная книжная полка",
        price: 12750,
        quantity: 2,
        images: ["/img/shelf.png"],
        seller: { id: 2, name: "Seller2" },
        rating: 4.6,
        unitsInStock: 7,
      },
    ];

    makeAutoObservable(this);
  }

  setItems(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get itemsCount() {
    return this._items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
