var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueObj = Object.create(queueMethods);

  return queueObj;

};

var queueMethods = {

  storage: {},
  front: 0,
  end: 0,

  enqueue: function(value) {
    queueMethods.storage[queueMethods.end] = value;
    queueMethods.end++;
  },

  dequeue: function() {
    if (queueMethods.end - queueMethods.front > 0) {
      var dequeueValue = queueMethods.storage[queueMethods.front];
      delete queueMethods.storage[queueMethods.front];
      queueMethods.front++;

      return dequeueValue;
    }
  },

  size: function() {
    return queueMethods.end - queueMethods.front;
  }

};