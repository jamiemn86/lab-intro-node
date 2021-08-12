class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.includes(pos)) {
      return this.items.indexOf(pos);
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    } else {
      let array = this.items;
      let largest = Math.max.apply(Math, array);
      return largest;
    }
  }

  min() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    } else {
      let array = this.items;
      let lowest = Math.min.apply(Math, array);
      return lowest;
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
