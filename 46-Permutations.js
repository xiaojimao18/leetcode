/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  let arr = nums.slice().map((num, index) => index);
  if (arr.length > 0) {
    result.push(nums);
  }

  while (arr = findNext(arr)) {
    result.push(arr.map(i => nums[i]));
  }

  return result;

  function findNext(arr) {
    let next = arr.slice();

    let notFound = true;
    for (let i = arr.length - 2; notFound && i >= 0; i --) {
      for (let j = arr.length - 1; notFound && j > i; j --) {
        if (next[j] > next[i]) {
          let temp = next[j];
          next[j] = next[i];
          next[i] = temp;

          temp = next.splice(i + 1, next.length - i - 1).sort((a, b) => a - b);
          next = next.concat(temp);
          notFound = false;
        }
      }
    }

    return notFound ? null : next;
  }
};

console.log(JSON.stringify(permute([1, 2, 3])));
console.log(JSON.stringify(permute([0, -1, 1])));
console.log(JSON.stringify(permute([5, 4, 6, 2])));
