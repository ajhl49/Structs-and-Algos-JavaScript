/**
  * JavaScript-based implementation of a Binary Search Tree.
  */

/**
 * Class constructor for a node within the binary search tree. Node objects
 * contain a key (number), as well as possibly a linked left or right node.
 * @param       {number} key [description]
 * @constructor
 */
function Node(key) {
    this.leftNode = null;
    this.rightNode = null;
    this.key = key;
}

/**
 * Class constructor for a basic binary search tree that stores numbers.
 * @constructor
 */
function BinarySearchTree() {
    this.root = null;
}

/**
 * Determines if the BST contains a specific key value within itself through
 * a iterative search.
 *
 * @param  {number} key The number to search for within the tree.
 * @return {boolean}    True if value is contained within the BST; otherwise, false.
 */
BinarySearchTree.prototype.contains = function (key) {
    var currNode = this.root;
    while(currNode != null) {
        if (key === currNode.key) {
            return true;
        } else if (key < currNode.key) {
            currNode = currNode.leftNode;
        } else {
            currNode = currNode.rightNode;
        }
    }
    return false;
};

/**
 * Determines if the BST contains a specific key value within itself through
 * a recursive search.
 * @param  {number} key The number to search for within the tree.
 * @return {boolean}    True if value is contained within the BST; otherwise, false.
 */
BinarySearchTree.prototype.containsRecursive = function (key) {
    function containsHelper (key, node) {
        if (node === null) {
            return false;
        } else if (node.key === key) {
            return true;
        }
        if (key < node.key) {
            return containsHelper(key, node.left);
        }
        return containsHelper(key, node.right);
    }

    return containsHelper(key, this.root);
};

module.exports = BinarySearchTree;
