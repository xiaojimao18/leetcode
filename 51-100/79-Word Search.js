/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const rowNum = board.length, columnNum = board[0].length;
  const used = [];
  for (let i = 0; i < rowNum; i ++) {
    used[i] = [];
    for (let j = 0; j < columnNum; j ++) {
      used[i][j] = false;
    }
  }

  for (let i = 0; i < rowNum; i ++) {
    for (let j = 0; j < columnNum; j ++) {
      if (search(board, word, used, 0, i, j)) {
        return true;
      }
    }
  }
  return false;

  function search(board, word, used, index, x, y) {
    if (index === word.length) {
      return true;
    }

    if (x < 0 || y < 0 || x >= rowNum || y >= columnNum
     || used[x][y] || word[index] !== board[x][y]
    ) {
      return false;
    }

    used[x][y] = true;
    const result = search(board, word, used, index + 1, x - 1, y)
        || search(board, word, used, index + 1, x + 1, y)
        || search(board, word, used, index + 1, x, y - 1)
        || search(board, word, used, index + 1, x, y + 1);
    used[x][y] = false;
    return result;
  }
};

// const board = [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];
// console.log(exist(board, 'ABCCED'));
// console.log(exist(board, 'SEE'));
// console.log(exist(board, 'ABCB'));

const board = [
  ['A','A']
];
console.log(exist(board, 'AAA'));
