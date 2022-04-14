var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let queueInstance = {};

  queueInstance.storage = {};
  queueInstance.front = 0;
  queueInstance.back = 0;

  // Object.assign(queueInstance, queueMethods);

  _.extend(queueInstance, queueMethods);

  return queueInstance;

};

var queueMethods = {

  enqueue: function(value) {

    this.storage[this.back] = value;
    this.back++;
  },

  dequeue: function() {

    if (this.back - this.front > 0) {

      var dequeueValue = this.storage[this.front];
      delete this.storage[this.front];

      this.front++;
      return dequeueValue;
    }

  },

  size: function() {
    return this.back - this.front;
  }

};

// use this
// create a queue instances using Queue which need to have functions to:
// enqueue (aka add to the back/end of line)
// dequeue (aka remove from front of line)
// size (returns size of line)


