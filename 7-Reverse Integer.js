/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max32int = Math.pow(2, 31) - 1;
  const min32int = -1 * Math.pow(2, 31);
  const charArr = x.toString().split('');
  let sign = 1;

  if (charArr[0] === '+' || charArr[0] === '-') {
    const c = charArr.shift();
    sign = (c === '-') ? -1 : 1;
  }

  const result = sign * Number(charArr.reverse().join(''));
  if (result >= min32int && result <= max32int) {
    return result;
  }
  return 0;
};

console.log(reverse(-8463847412));
console.log(reverse(8463847412))
