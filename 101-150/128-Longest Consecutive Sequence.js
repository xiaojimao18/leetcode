/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let maxLength = 0;
  const map = new Map();
  nums.forEach(num => { map.set(num, 1); });

  for (let key of map.keys()) {
    let left = 1, right = 1;

    map.set(key, 0)
    while (map.has(key - left) && map.get(key - left) === 1) {
      map.set(key - left, 0);
      left ++;
    }
    while (map.has(key + right) && map.get(key + right) === 1) {
      map.set(key + right, 0);
      right ++;
    }

    maxLength = Math.max(maxLength, left + right - 1);
  }

  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
