/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  const len = Math.pow(2, nums.length);
  for (let i = 0; i < len; i ++) {
    const arr = [];
    i.toString(2).split('').reverse().forEach((c, index) => {
      c === '1' && arr.push(nums[index]);
    });
    result.push(arr);
  }
  return result;
};

console.log(JSON.stringify(subsets([1,2,3])));
