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
var isValidBST = function(root) {
  const max = (node) => {
    while (node.right) {
      node = node.right;
    }
    return node.val;
  };

  const min = (node) => {
    while (node.left) {
      node = node.left;
    }
    return node.val;
  };

  const isValid = (root) => {
    if (!root) return true;

    if (root.left && max(root.left) >= root.val) {
      return false;
    }
    if (root.right && min(root.right) <= root.val) {
      return false;
    }

    return isValid(root.left) && isValid(root.right);
  };

  return isValid(root);
};
