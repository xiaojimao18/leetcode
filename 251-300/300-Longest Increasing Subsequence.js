/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let max = 0;
  const maxLen = [];
  for (let i = 0, len = nums.length; i < len; i ++) {
    maxLen[i] = 1;
    for (let j = 0; j < i; j ++) {
      if (nums[j] < nums[i]) {
        maxLen[i] = Math.max(maxLen[j] + 1, maxLen[i]);
      }
    }
    max = Math.max(max, maxLen[i]);
  }

  return max;
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
