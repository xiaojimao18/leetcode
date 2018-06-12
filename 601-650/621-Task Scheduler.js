/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const map = new Map();
  tasks.forEach(task => map.set(task, map.get(task) + 1 || 1));

  const taskList = Array.from(map.keys());
  Array.prototype.sort.call(taskList, (t1, t2) => map.get(t2) - map.get(t1));

  let max = map.get(taskList[0]);
  let idles = n * (max - 1), extra = 0;
  for (let i = 1; i < taskList.length; i ++) {
    const times = map.get(taskList[i])
    if (times === max) {
      extra += 1;
      idles -= times - 1;
    } else {
      idles -= times;
    }
  }

  if (idles > 0) {
    return n * (max - 1) + max + extra;
  } else {
    return Array.from(map.values()).reduce((t1, t2) => t1 + t2);
  }
};

console.log(leastInterval(["A","B","C","D","E","A","B","C","D","E"], 4));