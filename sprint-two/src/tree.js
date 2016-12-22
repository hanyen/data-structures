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
  //call the Tree function to create an object and push it to .children array
  this.children.push(Tree(value));
};

// takes any input and returns a boolean reflecting whether it can 
// be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {

  //declare an accumulator variable and set it to false
  var acc = false;
  //create a traverse function that accept a children array
  var traverse = function (childrenArray) {  
    //iterate through the children array
    for (var i = 0; i < childrenArray.length; i++) {
      //check if the current element is equal the passed argument (target)
      if (childrenArray[i].value === target) {
        // if yes, set to true 
        acc = true;
        // check if children array contains value
      } 
        // else, check if the current element's children array holds value (i.e. has children)
        else if (childrenArray[i].children.length > 0 ) {
          // if yes, call traverse() again and pass the element's children array
          traverse (childrenArray[i].children);
      } 
    }
    // When the base case is reached (no more children, i.e. children array has no value) return the accumulator.
    return acc;
  };
  // call the traverse function and pass the root's children array
  return traverse(this.children);
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 The time complexity of the above function is Linear.

 */

