/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = fast = head;
  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (fast && fast.next);

  let p = slow, q = slow.next, temp = null;
  while (q) {
    temp = q.next;
    q.next = p;
    p = q;
    q = temp;
  }

  q = head;
  while (q !== slow) {
    if (q.val === p.val) {
      q = q.next;
      p = p.next;
    } else {
      return false;
    }
  }

  return true;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(1);

console.log(isPalindrome(head));
