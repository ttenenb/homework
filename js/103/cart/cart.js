class Cart {
  // 2 - added param items to allow us to recreate cart from items stored in session
  constructor(items) {
    this.items = items || {};
  }

  addItem(id, count) {
    const c = this.items[id] || 0;
    this.items[id] = count + c;
  }

  getItems() {
    return this.items;
  }
}

module.exports = Cart;