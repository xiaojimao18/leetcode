/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  
  const result = [];
  let queue = [root];
  while (queue.length > 0) {
    const vals = [];
    const nextLevel = [];
    queue.forEach(node => {
      vals.push(node.val);
      node.left && nextLevel.push(node.left);
      node.right && nextLevel.push(node.right);
    });
    result.push(vals);
    queue = nextLevel;
  }
  return result;
};