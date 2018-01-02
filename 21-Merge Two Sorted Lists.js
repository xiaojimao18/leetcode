/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(0);

  let p = dummy;
  while (l1 || l2) {
    if ((l1 && l2 && l1.val < l2.val) || (l1 && !l2)) {
      p.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      p.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    p = p.next;
  }

  return dummy.next;
};
