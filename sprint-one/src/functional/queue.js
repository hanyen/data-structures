var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstKey = 1;
  var lastKey = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[lastKey] = value;
    lastKey++;
  };

  someInstance.dequeue = function() {
    var returnValue = storage[firstKey];
    delete storage[firstKey];
    size--;
    firstKey++;
    if (size < 1) {
      size = 0;
      firstKey = 1;
      lastKey = 1;
    }
    return returnValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
