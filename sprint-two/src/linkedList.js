var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // 6 is passed to the function. value = 6
  list.addToTail = function(value) {
    // naive implementation
    if (!list.tail) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      //create a new object with key of 1
      //list[1] = Node(value);
      list.tail = Node(value);
      list.head.next = 'tail';
      // list.head = list.tail;
      console.log(list);
    }

  };

  list.removeHead = function() {
    list.head = list.tail;
    return list.head.value;
  };

  list.contains = function(target) {
    // naive implementation
    if (target === list.head.value) {
      return true;
    } else if (target === list.tail.value) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
The above function has constant time complexity (O n)

 */
