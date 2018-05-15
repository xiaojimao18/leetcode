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
var rob = function(root) {
  const maxValue = (node) => {
    if (node === null) {
      return 0;
    }
    if (node.max) {
      return node.max
    }
    node.max = Math.max(
      maxValue(node.left) + maxValue(node.right),
      node.val + maxExcludingValue(node.left) + maxExcludingValue(node.right)
    );
    return node.max;
  };
  const maxExcludingValue = (node) => {
    if (node === null) {
      return 0;
    }
    return maxValue(node.left) + maxValue(node.right);
  }

  return maxValue(root);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);
console.log(rob(root));
debugger