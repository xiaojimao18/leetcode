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
var swapPairs = function(head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let p = dummy;
  while (p.next !== null && p.next.next !== null) {
    const temp = p.next.next;
    p.next.next = temp.next;
    temp.next = p.next;
    p.next = temp;

    p = p.next.next;
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

const lists = arrayToList([1, 2]);
const result = swapPairs(lists);
console.log(JSON.stringify(listToArray(result)));