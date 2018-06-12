/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let left = -1, right = -1;
  let min, max;

  const len = nums.length;
  for (let i = 1; i < len; i ++) {
    if (nums[i - 1] > nums[i]) {
      if (left === -1) {
        left = i - 1;
        min = max = nums[i - 1];
      }
      right = i;
    }
  }

  if (left === -1) {
    return 0;
  }

  for (let i = left; i <= right; i ++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }

  while (left > 0 && nums[left - 1] > min) {
    left -= 1;
  }

  while (right < len && nums[right + 1] < max) {
    right += 1;
  }

  return right - left + 1;
};

console.log(findUnsortedSubarray([2,3,3,2,4]));
console.log(findUnsortedSubarray([1,3,2,2,2]));
