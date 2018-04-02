/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const map = [];
  for (let i  = 0, len1 = grid.length; i < len1; i ++) {
    map[i] = [];
    for (let j  = 0, len2 = grid[i].length; j < len2; j ++) {
      map[i][j] = grid[i][j];
    }
  }

  let num = 0;
  for (let i = 0, len1 = map.length; i < len1; i ++) {
    for (let j = 0, len2 = map[i].length; j < len2; j ++) {
      if (map[i][j] == 1) {
        num ++;
        search(map, i, j, len1, len2);
      }
    }
  }
  return num;
};

function search(map, i, j, len1, len2) {
  const queue = [[i, j]];

  let p, x, y;
  while(queue.length > 0) {
    p = queue.pop();
    x = p[0];
    y = p[1];

    if (x < 0 || x >= len1 || y < 0 || y >= len2) {
      continue;
    }

    if (map[x][y] == 1) {
      map[x][y] = 2;
      queue.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
    }
  }
}

console.log(numIslands(
  [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
));

console.log(numIslands(
  [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
  ]
));
