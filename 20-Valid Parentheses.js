/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0, len = s.length; i < len; i ++) {
    switch(s[i]) {
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case '(':
      case '[':
      case '{':
        stack.push(s[i]);
        break;
      default:
        throw new Error('invalid charactor' + s[i]);
    }
  }

  return stack.length === 0;
};

console.log(isValid('({[]})'));
console.log(isValid('({[}])'));
console.log(isValid('()[]{}'));
