/**
  * JavaScript-based implementation of a Binary Search Tree.
  */

/**
 * Class constructor for a basic binary search tree that stores numbers.
 * @constructor
 */
function BinarySearchTree() {
    this.root = null;
}

/**
* Class constructor for a node within the binary search tree. Node objects
* contain a key (number), as well as possibly a linked left or right node.
*
* This definition is effectively a static definition on the class.
*
* @param       {number} key The number that this node will hold.
* @constructor
*/
BinarySearchTree.Node = function (key) {
    this.left = null;
    this.right = null;
    this.key = key;
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
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
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
    function containsHelper (node, key) {
        if (node === null) {
            return false;
        } else if (node.key === key) {
            return true;
        }
        if (key < node.key) {
            return containsHelper(node.left, key);
        }
        return containsHelper(node.right, key);
    }

    return containsHelper(this.root, key);
};

/**
 * Inserts a number into the binary search tree, if it is unique.
 *
 * @param  {number} key The number to insert into the tree.
 */
BinarySearchTree.prototype.insert = function (key) {
    this.root = this._insertHelper(this.root, key);
};

/**
 * Converts the BST into an ordered array in ascending value.
 *
 * @return {Array} The array of ordered values within the tree.
 */
BinarySearchTree.prototype.toInOrderArray = function () {
    var arr = [];

    this._inOrder(this.root, function (currNode) {
        arr.push(currNode.key);
    });

    return arr;
};

/**
 * Helper method for <code>insert</code>. Provided key is inserted into the
 * BST, creating a new leaf if the key is unique.
 *
 * @param  {Node} node   The current node to process for key insertion.
 * @param  {number} key  The number to add to the current subtree.
 * @return {Node}        The current or newly created node.
 */
BinarySearchTree.prototype._insertHelper = function (node, key) {
    if (node === null) {
        return new BinarySearchTree.Node(key);
    }

    if (key < node.key) {
        node.left = this._insertHelper(node.left, key);
    } else if (key > node.key) {
        node.right = this._insertHelper(node.right, key);
    }

    return node;
};

/**
 * Traverses through the BST in order (left-to-right increasing), calling the
 * provided the callback function on each node.
 *
 * @param  {Node}     node     The current node being traversed through.
 * @param  {Function} callback The function to call on the current node.
 */
BinarySearchTree.prototype._inOrder = function (node, callback) {
    if (node !== null) {
        this._inOrder(node.left, callback);
        callback(node);
        this._inOrder(node.right, callback);
    }
};

BinarySearchTree.prototype._preOrder = function (node, callback) {
    if (node !== null) {
        callback(node);
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback);
    }
};

BinarySearchTree.prototype._postOrder = function (node, callback) {
    if (node !== null) {
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        callback(node);
    }
};

module.exports = BinarySearchTree;
