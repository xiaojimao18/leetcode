/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let result = 0;

  function recurFind(nums, S, curS, index) {
    if (nums.length === index) {
      if (S === curS) {
        result += 1;
      }
      return;
    }
    recurFind(nums, S, curS + nums[index], index + 1);
    recurFind(nums, S, curS - nums[index], index + 1);
  }

  recurFind(nums, S, 0, 0);
  return result;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 4));
