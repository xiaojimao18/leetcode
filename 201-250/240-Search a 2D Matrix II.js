/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  function search(matrix, target, x, y) {
    if (x >= matrix.length || y >= matrix[0].length) {
      return false;
    }

    if (matrix[x][y] === target) {
      return true;
    }

    for (let i = x + 1, len = matrix.length; i < len; i ++) {
      if (matrix[i][y] === target) {
        return true;
      }
    }

    for (let j = y + 1, len = matrix[0].length; j < len; j ++) {
      if (matrix[x][j] === target) {
        return true;
      }
    }

    return search(matrix, target, x + 1, y + 1);
  }

  return search(matrix, target, 0, 0);
};

console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20));
