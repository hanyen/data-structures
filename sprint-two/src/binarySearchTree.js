var BinarySearchTree = function(value) {
  var binaryTree = Object.create(treePrototype);
  binaryTree.value = 5; //set initial value
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
  console.log('-------');
  var found = false;
  
  var traverseLeft = function(node) {
    
    //if found in root
    if (node.value === target) {
      found = true;
    }

    //traverse left first
    if (node.left) {
      if (node.left.value === target) {
      found = true;
      } else {
        traverseLeft(node.left);
        traverseRight(node.left);
      }
    }  
  }

  var traverseRight = function(node) {
    //traverse right first
    if (node.right) {
      if (node.right.value === target) {
        found = true;
      } else {
        traverseLeft(node.right);
        traverseRight(node.right);
      }
    }  
  }

  traverseLeft(this);
  traverseRight(this);
  
  return found;
};

treePrototype.depthFirstLog = function(item) {
  
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
