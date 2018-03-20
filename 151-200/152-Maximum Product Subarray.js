/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxPro = nums[0], max = nums[0], min = nums[0]
  for (let i = 1; i < nums.length; i ++) {
    let ma = max, mi = min;
    max = Math.max(Math.max(nums[i], ma * nums[i]), mi * nums[i]);
    min = Math.min(Math.min(nums[i], ma * nums[i]), mi * nums[i]);
    maxPro = Math.max(max, maxPro);
  }
  return maxPro;
};

console.log(maxProduct([2,3,-2,4]));
