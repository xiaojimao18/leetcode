/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = Object.create(null);
    for (var i = 0; i < nums.length; i ++) {
      var another = target - nums[i];
      if (typeof map[another] === 'number') {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
    new Error('no solution');
};

console.log(twoSum([3, 2, 4], 6));