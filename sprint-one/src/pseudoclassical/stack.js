var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeVar = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.sizeVar;
}

Stack.prototype.push = function(value) {
  // increment sizeVar
  this.sizeVar++;
  // create a property with sizeVar as the key and the argument as the value
  this.storage[this.sizeVar] = value;
}

Stack.prototype.pop = function() {
  // create a variable to hold the value to be returned
  var returnValue = this.storage[this.sizeVar];
  // delete the property to be popped
  delete this.storage[this.sizeVar];
  // decrease sizeVar
  this.sizeVar--;
  // check if sizeVar is less than 1, set it to 0
  if(this.sizeVar < 1) {
    this.sizeVar = 0;
  }
  // return the popped value
  return returnValue;
}
