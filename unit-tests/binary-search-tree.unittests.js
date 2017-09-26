var test = require('tape');
var BinarySearchTree = require('../data-structures/binary-search-tree.js');

test('Test empty iterative search', function (assert) {
    var bst = new BinarySearchTree();

    var actual = bst.contains(0);// Any number will do, should not return false

    assert.equal(actual, false);
    assert.end();
});

test('Test empty recursive search', function (assert) {
    var bst = new BinarySearchTree();

    var actual = bst.containsRecursive(0);

    assert.equal(actual, false);
    assert.end();
});

test('Test tree with multiple elements, iterative search', function (assert) {
    var bst = new BinarySearchTree();

    for (var i = 0; i < 10; i++) {
        bst.insert(i);
    }

    assert.equal(bst.contains(5), true);
    assert.equal(bst.contains(-5), false);

    assert.end();
});

test('Test adding one to empty tree', function (assert) {
    var bst = new BinarySearchTree();

    bst.insert(5);

    assert.equal(bst.contains(5), true);
    assert.equal(bst.root.key, 5);
    assert.end();
});

test('Test adding ascending keys to tree', function (assert) {
    var bst = new BinarySearchTree();

    for (var i = 0; i < 10; i++) {
        bst.insert(i);
    }

    assert.plan(11);

    var currNode = bst.root;
    for (var i = 0; i < 10; i++) {
        assert.equal(currNode.key, i);
        currNode = currNode.right;
    }

    assert.equal(currNode, null);

    assert.end();
});

test('Test adding descending keys to tree', function (assert) {
    var bst = new BinarySearchTree();

    for (var i = 10; i > 0; i--) {
        bst.insert(i);
    }

    assert.plan(11);

    var currNode = bst.root;
    for (var i = 10; i > 0; i--) {
        assert.equal(currNode.key, i);
        currNode = currNode.left;
    }

    assert.equal(currNode, null);

    assert.end();
});

test('Test the insertion helper function', function (assert) {
    var rootNode = new BinarySearchTree.Node(5);

    BinarySearchTree.prototype._insertHelper(rootNode, 3); // rootNode.left
    BinarySearchTree.prototype._insertHelper(rootNode, 7); // rootNode.right
    BinarySearchTree.prototype._insertHelper(rootNode, 4); // rootNode.left.right
    BinarySearchTree.prototype._insertHelper(rootNode, 2); // rootNode.left.left

    assert.equal(rootNode.left.key, 3);
    assert.equal(rootNode.right.key, 7);
    assert.equal(rootNode.left.right.key, 4);
    assert.equal(rootNode.left.left.key, 2);

    assert.end();
});

test('Test the ordered array conversion', function (assert) {
    var bst = new BinarySearchTree();
    var expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (var i = 0; i < 10; i++) {
        bst.insert(i);
    }

    assert.equal(bst.toInOrderArray().toString(), expectedArray.toString());

    assert.end();
});

test('Test the ordered array conversion using random values', function (assert) {
    var bst = new BinarySearchTree();
    var expectedArray = [];
    for (var i = 0; i < 10; i++) {
        var cVal = Math.floor(Math.random() * (99) + 1);
        expectedArray.push(cVal);
        bst.insert(cVal);
    }

    expectedArray = expectedArray.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    assert.equal(bst.toInOrderArray().toString(), expectedArray.toString());

    assert.end();
});
