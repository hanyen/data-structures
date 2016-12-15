var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeVar = 0;
  someInstance.firstKey = 1;
  someInstance.lastKey = 1;
  someInstance.returnValue;
  
  _.extend(someInstance, queueMethods);
  
  //console.log(someInstance.storage);
  return someInstance;
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
