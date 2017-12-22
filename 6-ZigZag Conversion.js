/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const result = [];
  for (let i = 0; i < numRows; i ++) {
    for (let j = 0, len = s.length; j < len; j += 2 * numRows - 2) {
      result.push(s[j + i]);

      let mapIndex = j + 2 * numRows - 2 - i;
      if (i !== 0 && i !== numRows - 1 && mapIndex < len) {
        result.push(s[mapIndex]);
      }
    }
  }
  return result.join('');  
};

console.log(convert("PAYPALISHIRING", 3));