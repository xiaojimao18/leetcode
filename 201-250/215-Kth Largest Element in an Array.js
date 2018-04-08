/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const sub = nums.slice(0, k);
  sub.sort((a, b) => a - b);

  for (let i = k, len = nums.length; i < len; i ++) {
    if (nums[i] > sub[0]) {
      sub[0] = nums[i];
      sub.sort((a, b) => a - b);
    }
  }
  return sub[0];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));