/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let p1 = headA, lenA = 0;
  while (p1) {
    p1 = p1.next;
    lenA += 1;
  }

  let p2 = headB, lenB = 0;
  while (p2) {
    p2 = p2.next;
    lenB += 1;
  }

  p1 = headA, p2 = headB;
  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff > 0) {
      p1 = p1.next;
      diff --;
    }
  } else {
    let diff = lenB - lenA;
    while (diff > 0) {
      p2 = p2.next;
      diff --;
    }
  }

  while (p1) {
    if (p1 == p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return null;
};