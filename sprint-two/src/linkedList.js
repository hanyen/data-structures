var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //list.tail = Node(value);
    if (!list.tail) {
      list.tail = Node(value);
    } else {
      list.head = list.tail;
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    list.head = list.tail;
    //list.tail = null;
    console.log(list.head);
    return list.head.value;
  };

  list.contains = function(target) {
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
 */
