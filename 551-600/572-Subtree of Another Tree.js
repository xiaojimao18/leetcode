/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  const isSame = function (t1, t2) {
    if (!t1 && !t2) {
      return true;
    }

    if (t1 && t2 && t1.val === t2.val) {
      return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
    }

    return false;
  }

  const isSubOf = function (ss, tt) {
    if (isSame(ss, tt)) {
      return true;
    } else {
      if (ss) {
        return isSubOf(ss.left, tt) || isSubOf(ss.right, tt);
      }
    }
    return false;
  }

  return isSubOf(s, t);
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
