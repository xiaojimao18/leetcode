/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let j = 0;
  const len1 = haystack.length, len2 = needle.length;

  if (len1 === 0 && len2 === 0) {
    return 0;
  }

  for (let i = 0; i < len1; i ++) {
    j = 0;

    if (len1 - i < len2) {
      break;
    }

    while (haystack[i + j] === needle[j] && i + j < len1 && j < len2) {
      j ++;
    }
    if (j === len2) return i;
  }
  return -1;
};


console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('aa', ''));
