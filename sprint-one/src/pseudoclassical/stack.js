var Stack = function() {

  this.storage = {};
  this.top = 0;
  this.bottom = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top - this.bottom > 0) {
    var topValue = this.storage[this.top - 1];
    delete this.storage[this.top - 1];

    this.top--;
    return topValue;
  }
};

Stack.prototype.size = function() {
  return this.top - this.bottom;
};


