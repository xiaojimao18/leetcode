/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var prevNode = null;

  const update = function(node) {
    if (!node) return;

    update(node.right);
    if (prevNode) {
      node.val += prevNode.val;
    }
    prevNode = node;
    update(node.left);
  }

  update(root);
  return root;
};
