/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const max = [];

  for (let i = 0, len = nums.length; i < len; i ++) {
    if (i == 0 || i == 1) {
      max[i] = nums[i]
    } else {
      max[i] = nums[i] + Math.max(max[i - 2], max[i - 3] || 0);
    }
  }
  return Math.max(max[nums.length - 1] || 0, max[nums.length - 2] || 0);
};

const a = rob([1,2,3,4,5,6]);
console.log(a);