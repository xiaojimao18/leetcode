/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isMirror = (t1, t2) => {
    if (!t1 && !t2) {
      return true;
    }
    if (t1 && t2) {
      return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
    }
    return false;
  }

  return !root || isMirror(root.left, root.right);
};
