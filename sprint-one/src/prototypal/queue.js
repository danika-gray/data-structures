var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueObj = Object.create(queueMethods);
  queueObj.storage = {};
  queueObj.front = 0;
  queueObj.end = 0;

  return queueObj;

};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue: function() {
    if (this.end - this.front > 0) {
      var firstValue = this.storage[this.front];

      delete this.storage[this.front];
      this.front++;

      return firstValue;
    }
  },

  size: function() {
    return this.end - this.front;
  }

};