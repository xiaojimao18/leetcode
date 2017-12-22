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
var addTwoNumbers = function(l1, l2) {
  var n1, n2, carry = 0;
  var result = new ListNode(0);
  var current = result;
  while(l1 || l2) {
    n1 = l1 !== null ? l1.val : 0;
    n2 = l2 !== null ? l2.val : 0;
    current.next = new ListNode((n1 + n2 + carry) % 10);
    current = current.next;
    carry = Math.floor((n1 + n2 + carry) / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return result.next;
};
