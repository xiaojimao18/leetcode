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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let fast = head, slow = head, pre = head;
  while(fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  pre.next = null;

  return merge(sortList(head), sortList(slow));
};

function merge(p1, p2) {
  let dummy = new ListNode(0);
  let p = dummy;
  while(p1 || p2) {
    if (p1 && (!p2 || p1.val <= p2.val)) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  return dummy.next;
}
