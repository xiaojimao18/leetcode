/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const numCache = [1, 1, 2];
  let result = num(n);
  return result;

  function num(n) {
    if (typeof numCache[n] === 'number') {
      return numCache[n];
    }

    let result = 0;
    for (let i = 0; i < n; i ++) {
      result += num(i) * num(n - i - 1);
    }
    numCache[n] = result;
    return result;
  }
};

console.log(numTrees(19));
