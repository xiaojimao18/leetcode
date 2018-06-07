/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];

  for (let i = 0, len = nums.length; i < len; i ++) {
    const num = Math.abs(nums[i]);
    nums[num - 1] = -1 * Math.abs(nums[num - 1]);
  }

  for (let i = 0, len = nums.length; i < len; i ++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
