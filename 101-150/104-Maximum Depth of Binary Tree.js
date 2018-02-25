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
var maxDepth = function(root) {
  let maxDepth = 0;

  const updateDepth = (node, depth) => {
    if (node === null) {
      if (depth - 1 > maxDepth) {
        maxDepth = depth - 1;
      }
      return;
    }
    updateDepth(node.left, depth + 1);
    updateDepth(node.right, depth + 1);
  }

  updateDepth(root, 1);
  return maxDepth;
};