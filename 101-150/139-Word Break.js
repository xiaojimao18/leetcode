/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const canBeBreak = [];

  canBeBreak[0] = true;
  for (let i = 1, len = s.length; i <= len; i ++) {
    for (let j = 0; j < i; j ++) {
      if (canBeBreak[j] && wordDict.indexOf(s.slice(j, i)) > -1) {
        canBeBreak[i] = true;
        break;
      }
    }
  }

  return !!canBeBreak[s.length];
};

console.log(wordBreak('leetcode', ['leetco', 'leet', 'code']));
console.log(wordBreak('', ['leet', 'code']));
