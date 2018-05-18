/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0, len = nums.length; i < len; i ++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }

  const objArr = Array.from(map.keys()).map(key => ({ key, value: map.get(key) }));
  return objArr.sort((obj1, obj2) => obj2.value - obj1.value)
      .slice(0, k)
      .map(obj => obj.key);
};

console.log(topKFrequent([1, 2, 2, 2, 4, 4, 5], 2));
