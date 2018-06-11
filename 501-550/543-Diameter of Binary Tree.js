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
var diameterOfBinaryTree = function(root) {
  const findDepth = function (node, depth) {
    if (node === null) {
      return depth;
    }

    return Math.max(
      findDepth(node.left, depth + 1),
      findDepth(node.right, depth + 1)
    );
  };

  let maxDia = 0;
  const findDiameter = function (node) {
    if (node === null) {
      return;
    }

    const curDia = findDepth(node.left, 0) + findDepth(node.right, 0);
    maxDia = Math.max(curDia, maxDia);

    findDiameter(node.left);
    findDiameter(node.right);
  };

  findDiameter(root);
  return maxDia;
};