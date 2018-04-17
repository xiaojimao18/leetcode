/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length;

  const l2r = [];
  const r2l = [];

  l2r[0] = nums[0]
  for (let i = 1; i < length; i ++) {
    l2r[i] = l2r[i - 1] * nums[i];
  }

  r2l[length - 1] = nums[length - 1];
  for (let i = length - 2; i >= 0; i --) {
    r2l[i] = r2l[i + 1] * nums[i];
  }

  const result = [];
  for (let i = 0; i < length; i ++) {
    result[i] = (i - 1 < 0 ? 1 : l2r[i - 1]) * (i + 1 < length ? r2l[i + 1] : 1);
  }

  return result;
};

console.log(JSON.stringify(productExceptSelf([0, 0])));