/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let result = intervals.slice();
  result.sort((a, b) => a.start - b.start);

  let i = 0;
  while (i + 1 < result.length) {
    if (result[i].end >= result[i + 1].start) {
      result[i].end = Math.max(result[i].end, result[i + 1].end);
      result.splice(i + 1, 1);
    } else {
      i += 1;
    }
  }

  return result;
};


function Interval(start, end) {
  this.start = start;
  this.end = end;
}

const a = new Interval(1, 3);
const b = new Interval(8, 10);
const c = new Interval(2, 6);
const d = new Interval(15, 18);
const arr = [a, b, c, d];
console.log(JSON.stringify(merge(arr)));