/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length;
  let i = len - 2;
  for (; i >= 0; i --) {
    let result = Number.MAX_VALUE, index = -1;

    let j = i + 1;
    for (; j < len; j ++) {
      if (nums[i] < nums[j] && nums[j] < result) {
        result = nums[j];
        index = j;
      }
    }
    if (index >= 0) {
      nums[index] = nums[i];
      nums[i] = result;

      // 对后面的值进行排序
      const arr = nums.splice(i + 1, len - i);
      arr.sort((a, b) => a - b)
      nums.push(...arr);
      break;
    }
  }

  // 已经是最大值
  if (i < 0) {
    nums.sort((a, b) => a - b);
  }
};

const arr = [2,2,7,5,4,3,2,2,1];
nextPermutation(arr)
console.log(JSON.stringify(arr));
