var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var subTree = Tree(value);
  this.children.push(subTree);

};

treeMethods.contains = function(target) {

  var result = false;

  if (this.value === target) {
    result = true;

  } else if (this.children) {

    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        result = true;
      }
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
