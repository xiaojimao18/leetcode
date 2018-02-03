/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i ++) {
    for (let j = 1; j < len - i; j ++) {
      if (nums[j - 1] > nums[j]) {
        let temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
};

const nums = [1,0,1,2,0,2,1];
sortColors(nums);
console.log(JSON.stringify(nums));
