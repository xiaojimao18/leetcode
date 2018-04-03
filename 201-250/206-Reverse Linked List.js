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
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let p1 = null, p2 = head;
  while(p2) {
    let p = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p;
  }

  return p1;
};
