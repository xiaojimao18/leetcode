/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  for (let i = 0; i < Math.ceil(len / 2); i ++) {
    for (let j = 0; j < Math.floor(len / 2); j ++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      matrix[j][len - 1 - i] = tmp;
    }
  }
};

const matrix = 
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

rotate(matrix);
console.log(JSON.stringify(matrix));
