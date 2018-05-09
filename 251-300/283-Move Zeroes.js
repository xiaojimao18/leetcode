/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroP = 0;
  for (let i = 0, len = nums.length; i < len; i ++) {
    if (nums[i] !== 0) {
      nums[zeroP ++] = nums[i];
    }
  }
  for (let i = zeroP, len = nums.length; i < len; i ++) {
    nums[i] = 0;
  }
};

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);