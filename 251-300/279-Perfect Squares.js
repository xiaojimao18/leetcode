/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const leastNum = [0, 1];
  for (let i = 0; i <= n; i ++) {
    for (let j = 1; i + j * j <= n; j ++) {
      let sum = i + j * j;
      if (leastNum[sum]) {
        leastNum[sum] = Math.min(leastNum[sum], leastNum[i] + 1);
      } else {
        leastNum[sum] = leastNum[i] + 1;
      }
    }
  }

  return leastNum[n];
};

console.log(numSquares(13));
