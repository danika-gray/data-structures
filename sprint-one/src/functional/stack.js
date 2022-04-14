var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var bottom = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // add value to someInstance (to the top)
    storage[top] = value; // storage['0'] returns value
    top++;
  };

  someInstance.pop = function() {
    // remove top value from storage if size is > 0
    if (top - bottom > 0) {
      var popValue = storage[top - 1];
      //console.log('popValue: ' + popValue)
      delete storage[top];

      top--;
      return popValue;
    }
  };

  someInstance.size = function() {
    // size of the stack should be top - bottom
    var size = top - bottom;
    return size;
  };

  return someInstance;
};
