/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const result = [];
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const lenArr = [], indexArr = [];

  if (!digits) {
    return [];
  }

  Array.from(digits).forEach(c => {
    lenArr.push(map[c].length);
    indexArr.push(0);
  });

  let continueFlag = true;
  while (continueFlag) {
    const strArr = [];
    for (let i = digits.length - 1; i >= 0; i --) {
      strArr.push(map[digits[i]][indexArr[i]]);
    }
    result.push(strArr.reverse().join(''));

    indexArr[digits.length - 1] ++;
    for (let i = digits.length - 1; i >= 0; i --) {
      if (indexArr[i] === lenArr[i]) {
        if (i === 0)  continueFlag = false;
        indexArr[i] = 0;
        indexArr[i - 1] ++;
      }
    }
  }
  return result;
};

console.log(letterCombinations('234'));
