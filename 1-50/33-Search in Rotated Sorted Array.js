/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length;
  if (len === 0) {
    return -1;
  }

  if (nums[0] <= target) {
    for (let i = 0; i < len; i ++ ) {
      if (nums[i] === target) {
        return i;
      } else if (nums[i] > target) {
        return -1;
      }
    }
  } else {
    for (let i = len - 1; i >= 0; i --) {
      if (nums[i] === target) {
        return i;
      } else if (nums[i] < target) {
        return -1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
console.log(search([4, 5, 6, 7, 0, 1, 2], 9));
console.log(search([4, 5, 6, 7, 0, 1, 2], -1));
