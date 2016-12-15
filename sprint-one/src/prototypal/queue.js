var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.sizeVar = 0;
  newQueue.firstKey = 1;
  newQueue.lastKey = 1;
  newQueue.returnValue;

  return newQueue;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.sizeVar++;
  this.storage[this.lastKey] = value;
  this.lastKey++;
};

queueMethods.dequeue = function() {
  //console.log(this.storage[this.firstKey]);
  this.returnValue = this.storage[this.firstKey];
  console.log(this.returnValue);
  delete this.storage[this.firstKey];
  this.sizeVar--;
  this.firstKey++;
  // console.log(this.firstKey);
  if (this.sizeVar < 1) {
    this.sizeVar = 0;
    this.firstKey = 1;
    this.lastKey = 1;
  }
  return this.returnValue;
};

queueMethods.size = function() {
  return this.sizeVar;
  
};
