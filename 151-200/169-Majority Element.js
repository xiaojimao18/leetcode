/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = nums[0], sum = 1;
  for (let i = 1, len = nums.length; i < len; i ++) {
    result === nums[i] ? sum ++ : sum --;
    if (sum === 0) {
      result = nums[i];
      sum = 1;
    }
  }
  return result;
};

console.log(majorityElement([2,2,1,1,2]));
