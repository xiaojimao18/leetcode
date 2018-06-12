/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  function isPalindromic(s, l, r) {
    while (l < r) {
      if (s[l ++] !== s[r --]) {
        return false;
      }
    }
    return true;
  }

  const len = s.length;
  let count = len;
  for (let i = 0; i < len; i ++) {
    for (let j = 1; i - j >= 0 && i + j < len; j ++) {
      if (isPalindromic(s, i - j, i + j)) {
        count ++;
      } else {
        break;
      }
    }

    for (let j = 1; i - j + 1 >= 0 && i + j < len; j ++) {
      if (isPalindromic(s, i - j + 1, i + j)) {
        count ++;
      } else {
        break;
      }
    }
  }

  return count;
};

console.log(countSubstrings('ababa'));
