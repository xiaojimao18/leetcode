/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let reach = 0;
  for (let i = 0, len = nums.length; i < len - 1 && i <= reach; i ++) {
    reach = Math.max(nums[i] + i, reach);
  }
  if (reach < nums.length - 1) {
    return false;
  }
  return true;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,1,4]));
console.log(canJump([0]));