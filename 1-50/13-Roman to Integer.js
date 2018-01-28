/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let result = 0;
  let i = 0, len = s.length;
  while (i < len) {
    if (i + 1 < len && romanMap[s[i]] < romanMap[s[i + 1]]) {
      result += romanMap[s[i + 1]] - romanMap[s[i]];
      i += 2;
    } else {
      result += romanMap[s[i]];
      i += 1;
    }
  }
  return result;
};

console.log(romanToInt('MMMCMXCIX'));
console.log(romanToInt('MMMDCCCLXXXVIII'));
