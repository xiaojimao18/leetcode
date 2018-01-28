/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num > 3999) {
    throw Error('number out of boundary');
  }

  const chars =[
    ['M', '', ''],
    ['C', 'D', 'M'],  // 1, 5, 10
    ['X', 'L', 'C'],
    ['I', 'V', 'X'],
  ];
  const resultArr = [];
  for (i = 0; i < 4; i ++) {
    let n = Math.floor(num / Math.pow(10, 3 - i));
    if (n === 4 || n === 9) {
      resultArr.push(chars[i][0])
      n === 4 ? resultArr.push(chars[i][1]) : resultArr.push(chars[i][2]);
    } else {
      if (n >= 5) {
        resultArr.push(chars[i][1]);
        n -= 5;
      }
      for (let j = 0; j < n; j ++) {
        resultArr.push(chars[i][0]);
      }
    }
    num = num % Math.pow(10, 3 - i);
  }

  return resultArr.join('');
};

console.log(intToRoman(3999));
