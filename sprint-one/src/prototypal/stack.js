var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.sizeVar = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  console.log(this.sizeVar);
  return this.sizeVar;
};

stackMethods.push = function(value) {
  this.sizeVar++;
  this.storage[this.sizeVar] = value;
};

stackMethods.pop = function() {
  var returnValue = this.storage[this.sizeVar];
  delete this.storage[this.sizeVar];
  this.sizeVar--;
  if (this.sizeVar < 1) {
    this.sizeVar = 0;
  }
  return returnValue;
};
