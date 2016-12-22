var Tree = function(value) {
  // functional with shared method
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

//create an object to hold the below functions and pass it to Tree function above (extended using _.extend)
var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that 
//node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// takes any input and returns a boolean reflecting whether it can 
// be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  var acc = false;
  var traverse = function (childrenArray) {  
    for (var i = 0; i < childrenArray.length; i++) {
      if (childrenArray[i].value === target) {
        acc = true;
        // check if children array contains value
      } else if (childrenArray[i].children.length > 0 ) {
        // it goes here because it couldn't find the target in the first level
        traverse (childrenArray[i].children);
      } 
    }
    return acc;
  };
  return traverse(this.children);
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 The time complexity of the above function is Linear.

 */

