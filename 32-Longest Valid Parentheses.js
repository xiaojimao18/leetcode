/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  
  const stack = [-1];
  for (let i = 0, len = s.length; i < len; i ++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length !== 0) {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return maxLen;
};

console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('((((((()'));
console.log(longestValidParentheses('())))))))'));
