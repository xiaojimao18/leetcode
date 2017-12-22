/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   var curStr = [], maxLen = 0;
//   var i = 0, len = s.length;
//   while (i < len) {
//     var j = i, index = 0;
//     while(j < len && (index = curStr.indexOf(s[j])) === -1) {
//       curStr.push(s[j ++]);
//     }
//     if (maxLen < curStr.length) {
//       maxLen = curStr.length;
//     }

//     i += (index > 0 ? index : 0) + 1;
//     curStr.length = 0;
//   }
//   return maxLen;
// };

var lengthOfLongestSubstring = function(s) {
  var curStr = [], maxLen = 0;
  var i = 0, j = 0, len = s.length;
  while (i < len && j < len) {
    var index = 0;
    while(j < len && (index = curStr.indexOf(s[j])) === -1) {
      curStr.push(s[j ++]);
    }
    maxLen = Math.max(maxLen, curStr.length);

    var moveNum = Math.max(index, 0) + 1;
    i += moveNum;
    curStr.splice(0, moveNum);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));