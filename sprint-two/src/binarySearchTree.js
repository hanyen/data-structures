var BinarySearchTree = function(value) {
  var binaryTree = Object.create(treePrototype);
  binaryTree.value = 5;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;

};

var treePrototype = {};

treePrototype.insert = function(item) {
  //create a new object
  var node = Object.create(treePrototype);
  //set the new object's value to the argument
  node.value = item;
    
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
    
  } else {
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

treePrototype.contains = function(item) {
  
};

treePrototype.depthFirstLog = function(item) {
  
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
