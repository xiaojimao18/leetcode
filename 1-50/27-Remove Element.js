/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0, len = nums.length; j < len; j ++) {
    if (nums[j] !== val) {
      nums[i ++] = nums[j];
    }
  }
  return i;
};

const arr = [2,3,3,2];
console.log(removeElement(arr, 2));
console.log(JSON.stringify(arr));
