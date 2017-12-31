/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let result = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  const len = nums.length; 
  for (let i = 0; i < len - 2; i ++) {
    if (nums[i] === nums[i - 1]) continue;

    let j = i + 1, k = len - 1;
    while (j < k) {
      const n = nums[i] + nums[j] + nums[k] - target;
      if (Math.abs(n) < Math.abs(result)) {
        result = n;
      }

      n > 0 ? k -- : j ++;
    }
  }
  return result + target;
};

console.log(threeSumClosest([-1, -2, 1, -4], 1));
