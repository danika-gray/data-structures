var Stack = function() {

  var stackObj = Object.create(stackMethods);
  stackObj.storage = {};
  stackObj.top = 0;
  stackObj.bottom = 0;

  return stackObj;

};

var stackMethods = {

  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },

  pop: function() {
    if (this.top - this.bottom > 0) {

      var topValue = this.storage[this.top];
      delete this.storage[this.top];


      this.top--;
      return topValue;
    }
  },

  size: function() {
    var size = this.top - this.bottom;
    return size;
  },

};


