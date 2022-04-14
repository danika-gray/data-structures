var Queue = function() {

  let queueInstance = {};

  queueInstance.storage = {};
  queueInstance.front = 0;
  queueInstance.back = 0;

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



