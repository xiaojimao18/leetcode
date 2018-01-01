/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const result = new ListNode(0);
  result.next = head;

  let p = result.next;
  let len = 0;
  while (p !== null)  {
    len ++;
    p = p.next;
  }

  const _n = len - n + 1;
  for (let i = 0, p = result; i <= len && _n > 0; i ++, p = p.next) {
    if (i === _n - 1) {
      p.next = p.next.next;
      break;
    }
  }

  return result.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);

console.log(removeNthFromEnd(head, 1));
