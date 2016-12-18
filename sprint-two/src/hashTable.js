

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //k = steven
  //v = segal
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if the array location already has a value
  // the content of the targer array is not undefined
  // console.log(this._storage.retrieve(index));
  if (this._storage.get(index) !== undefined) {
    // check if the actual key is equal. if yes, replace the value.
    
    var bucket = this._storage.get(index); // [[Bob, Loblaw]]
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      } 
    }
    // if key input does not match existing key in bucket, 
    this._storage.each(function(item, i, storage) {
      console.log('i am here');
      console.log(item);
      if (i === index) {
        item.push([k, v]);
      }
    });

  } else {
    this._storage.set(index, [[k, v]]);
  }
  //console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("index when retrieve run: " + index);
  

  //index = 0 for both elements
  // we need to "get" to the location using get function. Get will return the value, which is now an Array.
    //if the returned value is NOT an index, simply return the value.
    //if an Array, iterate to find k
    //if found, return the value
  
  var bucket = this._storage.get(index);
  
  // check if the array element is undefined
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1]; 
    }  
  }
  // if (bucket[0] !== undefined) {
  //   return bucket[0][1];
  // } else {
  //   // do nothing
  // }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //k = steven
  //we know the index 
  //this._storage.get(k);
  //this._storage.set(index, undefined);
  
  /*this._storage.each(function(item, i, storage) {
    if (i === index) {
      console.log(item);
    }
  });*/
  var bucket = this._storage.get(index);
  bucket.splice(0, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };*/