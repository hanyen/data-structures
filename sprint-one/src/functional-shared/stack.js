var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeVar = 0;

  _.extend(someInstance, stackMethods);
  //console.log(someInstance);
  return someInstance;
};

var stackMethods = {};

//stackMethods.sizeVar = 0;

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


//   push: function(value) {
//     size++;
//     storage[size] = value;
//   },
//   pop: function() {
//     var returnValue = storage[size];
//     delete storage[size];
//     size--;
//     if (size < 1) {
//       size = 0;
//     }
//     return returnValue;
//   }
// };

// this.size : function() {
//   console.log('i am here');
//   return 0;
//   }
