/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TLE
/* var threeSum = function(nums) {
  const result = [], resultStrArr = [];
  nums.sort((a, b) => a - b);

  const len = nums.length;
  for (let i = 0; i < len - 2; i ++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }

    for (let j = i + 1; j < len - 1; j ++) {
      if (nums[i] + nums[j] + nums[j + 1] > 0) {
        break;
      }

      for (let k = j + 1; k < len; k ++) {
        if (nums[i] + nums[j] + nums[k] > 0) {
          break;
        }

        if (nums[i] + nums[j] + nums[k] === 0) {
          const arr = [nums[i], nums[j], nums[k]];
          if (resultStrArr.indexOf(arr.toString()) === -1) {
            result.push(arr);
            resultStrArr.push(arr.toString());
          }
        }
      }
    }
  }

  return result;
}; */

var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  const len = nums.length; 
  for (let i = 0; i < len - 2; i ++) {
    if (nums[i] === nums[i - 1]) continue;

    let j = i + 1, k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j ++;
        k --;
        while (nums[j] === nums[j - 1])  j ++;
        while (nums[k] === nums[k + 1])  k --;
      } else {
        sum > 0 ? k -- : j ++;
      }

    }
  }
  return result;
};

console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));
console.log(JSON.stringify(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])));
