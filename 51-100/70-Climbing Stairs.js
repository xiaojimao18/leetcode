/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const record = [];
  return stairsFrom(n);

  function stairsFrom(i) {
    if (i === 1) return 1;
    if (i === 2) return 2;
  
    record[i] = record[i] || (stairsFrom(i - 1) + stairsFrom(i - 2));
    return record[i];
  }
};

console.log(climbStairs(3));
