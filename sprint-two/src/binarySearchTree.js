var BinarySearchTree = function(value) {
  var binaryTree = Object.create(treePrototype);
  binaryTree.value = 5; //set initial value to decide whether a node should go to left or right
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;

};

var treePrototype = {};

treePrototype.insert = function(item) {
  //currently only supports tree two level deep. Inserting a third level will overwrite values on level 2
  //create a new object
  var node = Object.create(treePrototype);
  //set the new object's value to the argument
  node.value = item;
  if (this.value === item) {
    //do nothing
  }
  //if the current node's value > the argument
  if (this.value > item) {
    //need to add as leaf
    if (this.left === null) {
      this.left = node;
    } else if (this.left.value > item) {
      this.left.left = node;
    } else {
      this.left.right = node;
    }
  //if current node's value < the argument
  } else if (this.value < item) {
    //need to add as leaf
    if (this.right === null) {
      this.right = node;  
    } else if (this.right.value > item) {
      this.right.left = node;
    } else {
      this.right.right = node;
    }
    
  }
  console.log(this);
};

treePrototype.contains = function(target) {
  //declare found variable and set it to false
  var found = false;
  //declare traverse function
  var traverse = function(node) {
    if (node.value === target) {
      found = true;
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(this);
  return found;
};

treePrototype.depthFirstLog = function(func) {
  
  //declare traverse function
  var traverse = function(node) {
    if (node.value !== undefined) {
      func(node.value);
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  
  traverse(this);
  
  return;
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
