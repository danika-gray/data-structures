var Stack = function() {
  var someInstance = {};

  var storage = {};
  var top = 0;
  var bottom = 0;

  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top - bottom > 0) {
      var popValue = storage[top - 1];
      delete storage[top];

      top--;
      return popValue;
    }
  };

  someInstance.size = function() {
    var size = top - bottom;
    return size;
  };

  return someInstance;
};
