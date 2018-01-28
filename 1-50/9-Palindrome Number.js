/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('');
};

console.log(isPalindrome(123));
console.log(isPalindrome(101));
console.log(isPalindrome(1));