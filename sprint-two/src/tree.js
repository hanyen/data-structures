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
  console.log (this.children);
};

// takes any input and returns a boolean reflecting whether it can 
// be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  //print out how the array looks like
  console.log(this.children);
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else {

      return false;
    }
    
    //if this.children array is not null
      //call the function again and pass the children
    //console.log('array length: ' + this.child.children.length);
    //if (this.child.children.length > 0) {
      //this = this.child;
      //treeMethods.contains(target);
    //}
  }
};

// assume we need this
var child = function(value) {
  var child = {};

  child.value = value;
  child.children = [];
  child.addChild = treeMethods.addChild;
  return child;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

