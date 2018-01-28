/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  
  var brackets = function(s, l, r) {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }
    
    l < n && brackets(s + '(', l + 1, r);
    l > r && brackets(s + ')', l, r + 1);
  };

  brackets('', 0, 0);
  return result;
};

console.log(generateParenthesis(3));
