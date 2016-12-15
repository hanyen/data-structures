var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeVar = 0;
  this.storage = {};

};

Stack.prototype.size = function() {
  return this.sizeVar;
};

Stack.prototype.push = function(value) {
  this.sizeVar++;
  this.storage[this.sizeVar] = value;
};

Stack.prototype.pop = function() {
  var returnValue = this.storage[this.sizeVar];
  delete this.storage[this.sizeVar];
  this.sizeVar--;
  if (this.sizeVar < 1) {
    this.sizeVar = 0;
  }
  return returnValue;
};
