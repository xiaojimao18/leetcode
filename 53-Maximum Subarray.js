/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let global = local = nums[0];

  for (let i = 1; i < nums.length; i ++) {
    local = Math.max(nums[i], local + nums[i]);
    global = Math.max(local, global);
  }

  return global;
};