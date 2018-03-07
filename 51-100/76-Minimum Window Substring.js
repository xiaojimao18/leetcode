/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = {};
  let minLen = Number.MAX_SAFE_INTEGER, minL = 0, minR = 0;
  for (let i = 0; i < t.length; i ++) {
    map[t[i]] ? map[t[i]] ++ : map[t[i]] = 1;
  }

  let l = 0, r = 0, num = 0;
  for (const sLen = s.length, tLen = t.length; r < sLen;) {
    if (map[s[r]] > 0) {
      num ++;
    }
    if (typeof map[s[r]] === 'number') {
      map[s[r]] --;
    }
    r ++;
    
    while (num === tLen & l < r) {
      if (minLen > r - l) {
        minLen = r - l;
        minL = l;
        minR = r;
      }

      if (typeof map[s[l]] === 'number') {
        map[s[l]] ++;
      }
      if (map[s[l]] > 0) {
        num --;
      }
      l ++; 
    }
  }

  return s.slice(minL, minR);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
