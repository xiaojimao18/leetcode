/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum & 1)  return false;

  const target = sum >> 1;
  const dp = [];

  // 初始化第一个数
  dp[0] = [];
  for (let i = nums[0]; i <= target; i ++) {
    dp[0][i] = nums[0];
  }

  for (let i = 1, len = nums.length; i < len; i ++) {
    dp[i] = [];
    for (let j = nums[i]; j <= target; j ++) {
      dp[i][j] = Math.max(dp[i - 1][j] || 0, (dp[i - 1][j - nums[i]] || 0) + nums[i]);
    }
  }
  return dp[nums.length - 1][target] === target;
};

console.log(canPartition([1, 11, 5, 5]));
