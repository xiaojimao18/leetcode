/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length;

  const left = findTarget((index) => {
    if (nums[index] === target) {
      return (index - 1 < 0 || nums[index - 1] < target) ? 0 : -1;
    } 
    return nums[index] < target ? 1 : -1;
  });
  const right = findTarget((index) => {
    if (nums[index] === target) {
      return (index + 1 >= len || nums[index + 1] > target) ? 0 : 1;
    } 
    return nums[index] < target ? 1 : -1;
  });

  function findTarget(satisfyFn) {
    let i = 0, j = len - 1, m = 0;
    while (i <= j) {
      m = Math.floor((i + j) / 2);
      result = satisfyFn(m);
      if (result === 0) {
        return m;
      } 
      result < 0 ? j = m - 1 : i = m + 1;
    }
    return -1;
  }

  return [left, right];
};

console.log(JSON.stringify(searchRange([5, 7, 7, 8, 10, 10], 8)));
