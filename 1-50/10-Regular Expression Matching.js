/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;

  const firstMatch = !!s[0] && (s[0] === p[0] || p[0] === '.');
  if (p[1] === '*') {
    return (firstMatch && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2));
  } else {
    return (firstMatch && isMatch(s.substring(1), p.substring(1)));
  }
};


console.log(isMatch("aa","aaa"))
console.log(isMatch("aa",".*"))
console.log(isMatch("aab","a*aa.*b"))
console.log(isMatch("aaa","a*ab*a"))
console.log(isMatch("aaa","ab*a*a"))
console.log(isMatch("","a*"))
console.log(isMatch("aab","c*a*b"))
