/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);

  const len = nums.length; 
  for (let i = 0; i < len - 3; i ++) {
    if (nums[i] == nums[i - 1])  continue;

    for (let j = i + 1; j < len - 2; j ++) {
      if (j - 1 > i && nums[j] === nums[j - 1]) continue;

      let k = j + 1, l = len - 1;
      while (k < l) {
        const cal = nums[i] + nums[j] + nums[k] + nums[l] - target;
        if (cal === 0) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          k ++;
          l --;
          while (nums[k] === nums[k - 1])  k ++;
          while (nums[l] === nums[l + 1])  l --;
        } else {
          cal > 0 ? l -- : k ++;
        }
      }
    }
  }
  return result;
};

console.log(JSON.stringify(fourSum([-1, 0, 1, 2, -1, -4], -1)));
console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
