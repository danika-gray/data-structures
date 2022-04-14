var Queue = function() {

  this.storage = {};
  this.front = 0;
  this.end = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.end - this.front > 0) {
    var frontValue = this.storage[this.front];
    delete this.storage[this.front];

    this.front++;
    return frontValue;
  }
};

Queue.prototype.size = function() {
  return this.end - this.front;
};


