/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < len; j ++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
};

console.log(findDuplicate([1, 2, 3, 4, 1]));
