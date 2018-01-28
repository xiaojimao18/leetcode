/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = 1;
  if (dividend < 0 && divisor < 0) {
    sign = 1;
    dividend = -dividend;
    divisor = -divisor;
  } else if (divisor < 0) {
    sign = -1;
    divisor = -divisor;
  } else if (dividend < 0) {
    sign = -1;
    dividend = -dividend;
  }

  const MIN_INT = Math.pow(2, 31)
  if (divisor === 0) {
    return sign < 0 ? -MIN_INT : MIN_INT - 1;
  }

  let longStep = 0, steps = 10000;
  for (let i = 0; i < steps; i ++) {
    longStep += divisor;
  }

  let sum = 0, i = 0;
  while (true) {
    sum += longStep;
    i += steps;
    if (sum > dividend || i >= MIN_INT) {
      i -= steps;
      sum -= longStep;
      break;
    }
  }

  while (true) {
    if (i >= MIN_INT) {
      return sign < 0 ? -MIN_INT : MIN_INT - 1;
    }

    sum += divisor;
    if (sum > dividend) {
      break;
    }
    i ++;
  }

  return sign < 0 ? -i : i;
};

console.log(divide(1, 1));
console.log(divide(-2147483648, -1));
console.log(divide(-2147483648, 1));
console.log(divide(-2147483649, 2));
