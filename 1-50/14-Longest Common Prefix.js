/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  const result = [];
  for (let i = 0, len = strs[0].length; i < len; i ++) {
    const c = strs[0][i];
    const flag = Array.prototype.every.call(strs, (str) => {
      if (str[i] === c) return true;
      return false;
    });
    if (!flag) break;
    result.push(c);
  }
  return result.join('');
};

console.log(longestCommonPrefix(['aaa', 'bbbb', 'ccc']));
console.log(longestCommonPrefix(['aba', 'abbb', 'aba']));
