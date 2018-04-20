/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function findParents(root, p, parents) {
    parents.push(root);
    if (root === p) {
      return true;
    }
    
    if (root.left && findParents(root.left, p, parents)) {
      return true;
    } else if (root.right && findParents(root.right, p, parents)) {
      return true;
    }
    parents.pop();
    return false;
  }

  const pParents = [], qParents = [];
  findParents(root, p, pParents);
  findParents(root, q, qParents);

  let result = null;
  for (let i = 0, len1 = pParents.length, len2 = qParents.length; i < len1 && i < len2; i ++) {
    if (pParents[i] === qParents[i]) {
      result = pParents[i]
    } else {
      return result;
    }
  }
  return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(0)
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(lowestCommonAncestor(root, root.left.right, root.right.right).val);
