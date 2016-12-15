var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeVar = 0;
  this.firstKey = 1;
  this.lastKey = 1;
  
};

Queue.prototype.enqueue = function(value) {
  this.sizeVar++;
  this.storage[this.lastKey] = value;
  this.lastKey++;
};

Queue.prototype.dequeue = function(value) {
  var returnValue = this.storage[this.firstKey];
  console.log(this.returnValue);
  delete this.storage[this.firstKey];
  this.sizeVar--;
  this.firstKey++;
  if (this.sizeVar < 1) {
    this.sizeVar = 0;
    this.firstKey = 1;
    this.lastKey = 1;
  }
  return returnValue;
};

Queue.prototype.size = function() {
  return this.sizeVar;
};

