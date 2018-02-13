/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  traversal(root, result);  
  return result;

  function traversal(root, result) {
    if (root === null) return;
    traversal(root.left, result);
    result.push(root.val);
    traversal(root.right, result);
  }
};
