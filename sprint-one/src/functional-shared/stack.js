var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackInstance = {};

  stackInstance.storage = {};
  stackInstance.top = 0;
  stackInstance.bottom = 0;

  //Object.assign(stackInstance, stackMethods);

  _.extend(stackInstance, stackMethods);

  return stackInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  pop: function() {
    if (this.top > 0) {
      var popValue = this.storage[this.top - 1];

      delete this.storage[this.top - 1];
      this.top--;

      return popValue;
    }

  },

  size: function() {
    return this.top - this.bottom;
  }

};






