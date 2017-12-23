/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const pattern = str.trim().match(/^[-+]?\d+/);
  if (!pattern) return 0;

  let result = 0, sign = 1;
  const MaxInt = Math.pow(2, 31) - 1;
  const MinInt = Math.pow(2, 31) * -1;

  const validStr = pattern[0];
  const charArr = validStr.split('');
  if (charArr[0] === '+' || charArr[0] === '-') {
    sign = charArr.shift() === '-' ? -1 : 1;
  }

  result = charArr.map(char => parseInt(char)).reduce((n1, n2) => 10 * n1 + n2, 0);
  if (result !== 0) {
    return Math.min(Math.max(sign * result, MinInt), MaxInt);
  }
  return 0;
};

console.log(myAtoi('    -010000   '));
console.log(myAtoi('2147483648'));
console.log(myAtoi('-2147483649'));
console.log(myAtoi('  -0012a42'));