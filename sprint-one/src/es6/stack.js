class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
    this.bottom = 0;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top - this.bottom > 0) {
      let topValue = this.storage[this.top - 1];
      delete this.storage[this.top - 1];

      this.top--;
      return topValue;
    }
  }

  size() {
    return this.top - this.bottom;
  }

}