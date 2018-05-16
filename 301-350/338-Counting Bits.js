/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const result = [0];
  for (let i = 1; i <= num; i ++) {
    result.push(result[Math.floor(i / 2)] + i % 2);
  }
  return result;
};

console.log(countBits(10));
