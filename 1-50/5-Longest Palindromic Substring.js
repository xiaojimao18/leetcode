/**
 * @param {string} s 
 * @param {number} l 
 * @param {number} r 
 */
var findPalindrome = function(s, l, r) {
  var len = s.length;
  while(l >= 0 && r < len && s[l] === s[r]) {
    l --; r ++;
  }
  l ++;
  r --;
  return { left: l, right: r };
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var left = 0, right = 0, maxLen = 0;
  var temp;
  for (var i = 0, len = s.length; i < len; i ++) {
    temp = findPalindrome(s, i - 1, i + 1);
    if (maxLen < temp.right - temp.left + 1) {
      left = temp.left;
      right = temp.right;
      maxLen = right - left + 1;
    }

    temp = findPalindrome(s, i, i + 1);
    if (maxLen < temp.right - temp.left + 1) {
      left = temp.left;
      right = temp.right;
      maxLen = right - left + 1;
    }
  }
  return s.substring(left, right + 1);
};

console.log(longestPalindrome('babad'));
