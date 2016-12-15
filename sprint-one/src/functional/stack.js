var Stack = function() {
  
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
    
  };

  someInstance.pop = function() {
    var returnValue = storage[size];
    delete storage[size];
    size--;
    if (size < 1) {
      size = 0;
    }
    return returnValue;
  };

  someInstance.size = function() {
    return size;
  };
  //console.log(someInstance);
  return someInstance;
};
