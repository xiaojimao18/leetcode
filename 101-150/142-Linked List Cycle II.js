/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head, slow = head;
  while (fast && slow) {
    fast = fast.next ? fast.next.next : null;
    slow = slow.next;
    if (fast && fast === slow) {
      break;
    }
  }

  if (!fast) {
    return null;
  }

  let p = head;
  while (p !== slow) {
    p = p.next;
    slow = slow.next;
  }

  return p;
};