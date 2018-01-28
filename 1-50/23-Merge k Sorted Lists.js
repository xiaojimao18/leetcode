/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const dummy = new ListNode(0);

  let p = dummy;
  while (!isAllNull(lists)) {
    let num = Number.MAX_VALUE, index = -1;
    lists.forEach((list, i) => {
      const val = list === null ? Number.MAX_VALUE : list.val;
      if (num > val) {
        num = val;
        index = i;
      }
    });
    p.next = new ListNode(num);
    p = p.next;
    lists[index] = lists[index].next;
  }

  function isAllNull(arr) {
    if (!arr || arr.length === 0) {
      return true;
    }

    return Array.prototype.every.call(arr, item => item === null);
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

const lists = [arrayToList([0, 2, 5]), arrayToList([1, 3, 6])];
const result = mergeKLists(lists);
console.log(JSON.stringify(listToArray(result)));
