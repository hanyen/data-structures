var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //create a counter property
  list.counter = 0;
  list.keyTrackingArray = []; // use this to find node

  // 6 is passed to the function. value = 6
  list.addToTail = function(value) {
    // naive implementation
                                        /*if (!list.tail) {
                                          list.head = Node(value);
                                          list.tail = Node(value);
                                        } else {*/
      // for every value that's passed here
      // create a node object and assign a DIFFERENT key each time
        // use what to iterate the key? for loop? use counter? 
        // Keep the counter value in the list object.

                                          /*list.tail = Node(value);
                                          list.head.next = 'tail';*/
      
      //create node for the value passed to this function
      list[list.counter] = Node(value);
      
      // need to set the previous key to the new value
      if (list.counter > 1) {
        list[list.counter - 1].next = list.counter;
      }
      
      //set head if (!list.head)
      if (!list.head) {
        list.head = Object.create(list[0]);
      }
      // use prototypal to look up head and tail value
       
      list.tail = Object.create(list[list.counter]);
      
      //push key to array to keep track of the linkedList key
      list.keyTrackingArray.push(list.counter);

      // console.log(list.counter);
      // console.log(list[list.counter].value);
      // console.log('----------');

      //increase counter by 1 at the end
      list.counter++;

  };

  list.removeHead = function() {
                      // naive implementation
                              // list.head = list.tail;
                              // return list.head.value;

    // console.log(list.keyTrackingArray);
    
    if (list.keyTrackingArray.length > 1) {
      var removedHeadKey = list.keyTrackingArray.shift();
      //console.log(returnValue);
      list.head = Object.create(list[list.keyTrackingArray[0]]);
      return list[removedHeadKey].value;
    } else {
      list.head = null;
      return list[0].value; 
    }
    
  };

  list.contains = function(target) {
                      // naive implementation
                              // if (target === list.head.value) {
                              //   return true;
                              // } else if (target === list.tail.value) {
                              //   return true;
                              // }
                              // return false;
    
    //convert list object to array
      // var arr = Object.keys(list).map(function (key) { return list[key]; });
      // console.log(arr);

    //use list.keyTrackingArray to iterate through the keys
    for (var i = 0; i < list.keyTrackingArray.length; i++) {
      // need to think how to iterate the array
      if (list[list.keyTrackingArray[i]].value === target ) {
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
