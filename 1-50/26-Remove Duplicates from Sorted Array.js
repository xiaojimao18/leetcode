/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1, len = nums.length; j < len; j ++) {
    if (nums[i] !== nums[j]) {
      nums[++ i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1,1,1,2,2,2,3,3,3]));
