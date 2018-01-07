/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k <= 1) { return head; }

  const dummy = new ListNode(0);
  dummy.next = head;

  let p = dummy;
  while (canReverse(p, k)) {
    let tail = p.next;
    for (let i = 0; i < k - 1; i ++) {
      tail = tail.next;
    }
    let l1 = p.next, l2 = p.next.next, l3 = l2.next;
    let nextP = l1;

    l1.next = tail.next;
    while (l2 !== tail) {
      l2.next = l1;
      l1 = l2;
      l2 = l3;
      l3 = l2.next;
    }
    p.next = tail;
    tail.next = l1;
    p = nextP;
  }

  function canReverse(p, k) {
    for (let i = 0; i < k; i ++) {
      if (p.next === null) {
        return false;
      }
      p = p.next;
    }
    return true;
  }

  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrayToList(arr) {
const dummy = new ListNode(0);

let p = dummy;
arr.forEach(num => {
  p.next = new ListNode(num);
  p = p.next;
});

return dummy.next;
}

function listToArray(list) {
const result = [];
while(list !== null) {
  result.push(list.val);
  list = list.next;
}
return result;
}

const lists = arrayToList([1, 2, 3, 4]);
const result = reverseKGroup(lists, 4);
console.log(JSON.stringify(listToArray(result)));
