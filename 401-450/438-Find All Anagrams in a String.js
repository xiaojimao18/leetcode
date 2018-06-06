/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const result = [];
  if (!s || !p) return result;

  const map = new Map();
  Array.from(p).forEach(char => map.set(char, (map.get(char) + 1) || 1));

  const slen = s.length, plen = p.length;
  let left = 0, right = 0, count = p.length;
  while (right < slen) {
    if (map.has(s[right])) {
      if (map.get(s[right]) > 0) {
        count -= 1;
      }
      map.set(s[right], map.get(s[right]) - 1);
    }

    if (count === 0) {
      result.push(left);
    }

    if (right - left === plen - 1) {
      if (map.has(s[left])) {
        if (map.get(s[left]) >= 0) {
          count += 1;
        }
        map.set(s[left], map.get(s[left]) + 1);
      }
      left += 1;
    }

    right += 1;
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
