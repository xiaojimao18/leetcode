/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const points = [], edge = [], stack = [];
  for (let i = 0; i < numCourses; i ++) {
    points[i] = {
      in: 0,
      visited: false,
      edge: [],  // edge starts from i
    };
  }

  for (let i = 0, len = prerequisites.length; i < len; i ++) {
    const prerequisite = prerequisites[i];
    points[prerequisite[0]].in += 1;
    points[prerequisite[1]].edge.push(prerequisite[0]);
  }

  do {
    while (stack.length > 0) {
      const p = stack.pop();
      points[p].edge.forEach(n => points[n].in -= 1);
    }

    for (let i = 0; i < numCourses; i ++) {
      if (points[i].in === 0 && points[i].visited === false) {
        stack.push(i);
        points[i].visited = true;
      }
    }
  } while (stack.length > 0);

  return points.every(p => p.visited);
};

console.log(canFinish(2, [[0, 1]]));
console.log(canFinish(5, [[0, 1], [1, 2], [2, 3], [3, 1], [4, 2]]));
