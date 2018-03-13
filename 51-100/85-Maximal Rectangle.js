/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const heightMatrix = [];
  for (let i = 0, rNum = matrix.length; i < rNum; i ++) {
    heightMatrix[i] = [];
    for (let j = 0, cNum = matrix[0].length; j < cNum; j ++) {
      if (matrix[i][j] === '1') {
        heightMatrix[i][j] = 1 + (i > 0 ? heightMatrix[i - 1][j] : 0);
      } else {
        heightMatrix[i][j] = 0
      }
    }
  }

  let result = 0;
  for (let i = 0, len = heightMatrix.length; i < len; i ++) {
    result = Math.max(result, maxArea(heightMatrix[i]));
  }
  return result;
  
  function maxArea(heights) {
    const stack = [], len = heights.length;
    let maxArea = 0, i = 0;
    while (i <= len) {
      if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]) {
        stack.push(i ++);
      } else {
        const cur = stack.pop();
        maxArea = Math.max(maxArea, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
      }
    }
    return maxArea;
  }
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
