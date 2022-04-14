var Queue = function() {
  var someInstance = {}; // makes a new instance of Queue which is a class/constructor fxn

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var end = 0;

  someInstance.enqueue = function(value) {

    storage[end] = value;
    end++;

  };

  someInstance.dequeue = function() {

    if (end - front > 0) {
      var firstValue = storage[front];
      delete storage[front];

      front++;
      return firstValue;
    }


  };

  someInstance.size = function() {
    return end - front;
  };

  return someInstance;
};

