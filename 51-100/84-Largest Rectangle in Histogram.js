/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
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
};

console.log(largestRectangleArea([4,2,0,3,2,5]));
console.log(largestRectangleArea([2, 2, 1, 1, 2, 1]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
