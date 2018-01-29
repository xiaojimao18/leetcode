/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const min = Math.min(m - 1, n - 1);

  let result = 1;
  for (let i = 1; i <= min; i ++) {
    result = result * (m + n - 1 - i) / i;
  }
  return result;
};

console.log(uniquePaths(100, 100));
