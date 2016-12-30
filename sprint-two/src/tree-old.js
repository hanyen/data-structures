var Tree = function(value) {
  // functional with shared method
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me // an array containing a number of subtrees // [ , , , , ]
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that 
//node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(child(value));
};

// takes any input and returns a boolean reflecting whether it can 
// be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  //print out how the array looks like
  // console.log(this.children);
  //console.log("parent value: " + this.value);
  // console.log('target: ' + target);
  var acc = false;
  
  
  var traverse = function (childrenArray) {
    // problem: the second array element is not traversed.
    // console.log(childrenArray.length);
    
    for (var i = 0; i < childrenArray.length; i++) {
      // console.log('value found during traverse: ' + childrenArray[i].value);
      
      if (childrenArray[i].value === target) {
        // console.log('VALUE FOUND: ' + childrenArray[i].value);
        // console.log('i should be here!!!!');
        // console.log('Node value: ' + childrenArray[i].value);
        // console.log('true');
        acc = true;
        // check if children array contains value
      } else if (childrenArray[i].children.length > 0 ) {
        // it goes here because it couldn't find the target in the first level
        // console.log('i am here');
        // why this is not executed
        traverse (childrenArray[i].children);

      } 
    }
    // console.log('acc value is: ' + acc);
    return acc;
  };

  return traverse(this.children);
};


var child = function(value) {
  var child = {};

  child.value = value;
  child.children = [];
  child.addChild = treeMethods.addChild;
  return child;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 The time complexity of the above function is Linear.

 */

