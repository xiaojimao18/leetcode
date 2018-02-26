/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const flatternRecursive = (node) => {
    let tailNode = node, leftTailNode;

    if (node.left) {
      tailNode = leftTailNode = flatternRecursive(node.left);
    }
    if (node.right) {
      tailNode = flatternRecursive(node.right);
    }

    if (leftTailNode) {
      leftTailNode.right = node.right;
      node.right = node.left;
    }
    node.left = null;
    return tailNode;
  }

  if (!root) return;

  flatternRecursive(root);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

flatten(root);
debugger;
