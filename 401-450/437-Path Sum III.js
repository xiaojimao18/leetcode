/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  const pathNodes = [];
  let total = 0;

  function travel(node, pathNodes, target) {
    if (!node) return;

    pathNodes.push(node);
    let temp = 0;
    for (let i = pathNodes.length - 1; i >= 0; i --) {
      temp += pathNodes[i].val;
      if (temp === target) {
        total += 1;
      }
    }

    travel(node.left, pathNodes, target);
    travel(node.right, pathNodes, target);
    pathNodes.pop();
  }

  travel(root, pathNodes, sum);
  return total;
};


