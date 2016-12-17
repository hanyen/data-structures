

// Instantiate a new graph
var Graph = function() {
  // create an array to store the node
  this.values = [];
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a new node with value of 1
  this.values.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.values.length; i++) {
    console.log("node value: " + this.values[i]);
    if (this.values[i] === node) {
      
      return true;
    }
  } return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] === node) {
      this.values[i] = null; //refactor this
    }
  }
  //remove the connection also //refactor this
  for (var i = 0; i < this.edge.length; i++) {
    console.log(this.edge[i]);
    if (this.edge[i].includes(node)) {
      // memo = i;
      this.edge[i][0] = null; //refactor this
      this.edge[i][1] = null; //refactor this
    } 
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //find out if in the fromNode object has toNode edge
  //find out if in the toNode object has fromNode edge
  for (var i = 0; i < this.edge.length; i++) {
    if (this.edge[i].includes(fromNode && toNode)) {
      return true;
    } else {
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //accept 2 arguments. The object with the fromNode value, add toNode to edge array.
  //The object with the toNode value, add fromNode to edge array.
  var edgeArr = [];
  edgeArr.push(fromNode);
  edgeArr.push(toNode);
  this.edge.push(edgeArr);
  console.log(this.edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // var memo;
  
  for (var i = 0; i < this.edge.length; i++) {
    console.log(this.edge[i]);
    if (this.edge[i].includes(fromNode && toNode)) {
      // memo = i;
      this.edge[i][0] = null; //refactor this
      this.edge[i][1] = null; //refactor this
    } 
  }
  // this.edge.[i]splice(memo, 1);
  // this.edge = [];
  // console.log(this.edge);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.values.length; i++) {
    cb(this.values[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


