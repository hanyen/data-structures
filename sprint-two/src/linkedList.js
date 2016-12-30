var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.tailCounter = 0;
  list.headCounter = 0

  list.addToTail = function(value) {
      //create a new node
      console.log('add ' + value);
      list[list.tailCounter] = Node(value);
      //insert new tail node in the previous tail's node next property.
      if (list.tailCounter > 0) {
        list[list.tailCounter - 1].next = list[list.tailCounter];
      }
      //set tail to the new node
      list.tail = list[list.tailCounter];
      //set head to the new node using a different counter
      list.head = list[list.headCounter];
      //increase tailCounter
      list.tailCounter++;
  };

  list.removeHead = function() {
    //create a variable to hold the head value to be removed
    var returnVal = list[list.headCounter];
    //increase headCounter so that it points to the next node
    list.headCounter++;
    //set the head to the next node
    list.head = list[list.headCounter];
    //return the removed head's value
    return returnVal.value;
  };

  list.contains = function(target) {
    //loop through the nodes, starting from the head and ends at the tail
    for (var i = list.headCounter; i < list.tailCounter; i++) {
      //check if the node is not undefined (i.e. it exists) and the value is equal target
      if (list[i].value !== undefined && list[i].value === target) {
        return true;
      } 
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
