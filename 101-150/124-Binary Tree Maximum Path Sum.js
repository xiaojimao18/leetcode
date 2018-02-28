/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  if (!root) {
    return Number.NEGATIVE_INFINITY;
  }

  const maxSinglePath = (node) => {
    if (!node) {
      return 0;
    }

    if (typeof node.maxSingle === 'undefined') {
      node.maxSingle = node.val + Math.max(maxSinglePath(node.left), maxSinglePath(node.right), 0);
    }
    return node.maxSingle;
  }

  const left = maxSinglePath(root.left);
  const right = maxSinglePath(root.right);
  const MaxPathPassRoot = root.val + Math.max(left, 0) + Math.max(right, 0);

  return Math.max(MaxPathPassRoot, maxPathSum(root.left), maxPathSum(root.right));
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(-3);
root.left = new TreeNode(-6);
root.right = new TreeNode(2);
root.right.left = new TreeNode(2)
root.right.left.left = new TreeNode(-6)
root.right.left.right = new TreeNode(-6)
root.right.left.right.right = new TreeNode(-6)
console.log(maxPathSum(root));
