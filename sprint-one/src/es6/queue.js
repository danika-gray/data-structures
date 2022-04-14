class Queue {

  constructor() {
    this.storage = {};
    this.front = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue() {
    if (this.end - this.front > 0) {
      var frontValue = this.storage[this.front];
      delete this.storage[this.front];

      this.front++;
      return frontValue;
    }
  }

  size() {
    return this.end - this.front;
  }

}
