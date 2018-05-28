/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const persons = people.slice();
  persons.sort((p1, p2) => {
    if (p1[0] === p2[0]) {
      return p1[1] - p2[1];
    } else {
      return p2[0] - p1[0];
    }
  });

  for (let i = 0, len = persons.length; i < len; i ++) {
    if (persons[i][1] !== i) {
      const p = persons.splice(i, 1)[0];
      persons.splice(p[1], 0, p);
    }
  }
  
  return persons;
};

reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);
