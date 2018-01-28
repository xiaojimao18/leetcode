/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;

  const len = height.length;
  let i = 0, sum = 0, next = -1, tempMax = -1;
  while (i < len - 1) {
    const h = height[i];
    
    next = -1;
    tempMax = -1;
    for (let j = i + 1; j < len; j ++) {
      if (height[j] >= h) {
        next = j;
        break;
      } else if (height[j] > tempMax) {
        next = j;
        tempMax = height[j];
      }
    }

    sum = 0;
    for (let j = i + 1; j < next; j ++) {
      sum += height[j];
    }
    result += Math.min(h, height[next]) * (next - i - 1) - sum;

    i = next;
  }

  return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
