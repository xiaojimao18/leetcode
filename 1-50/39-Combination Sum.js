/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const len = candidates.length;

  function findTarget(arr, index, target) {
    if (target < 0) {
      return false;
    } else if (target === 0) {
      return true;
    }

    for (let i = index; i < len; i ++) {
      const num = candidates[i];
      const temp = [...arr, num];
      if (findTarget(temp, i, target - num)) {
        result.push(temp);
      }
    }
  }
  findTarget([], 0, target);

  return result;
};

console.log(JSON.stringify(combinationSum([], 7)));
