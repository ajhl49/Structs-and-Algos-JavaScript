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
