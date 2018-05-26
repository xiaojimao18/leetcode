/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  function getRepeatStr(num, index) {
    const arr = [], n = [];
    let i = index, len = s.length;
    while (i < len) {
      if (s[i] >= '0' && s[i] <= '9') {
        n.push(s[i]);
        i ++;
      } else if (s[i] === '[') {
        const { index, str } = getRepeatStr(Number(n.join('')), i + 1);
        n.length = 0;
        arr.push(str);
        i = index;
      } else if (s[i] === ']') {
        i ++;
        break; 
      } else {
        arr.push(s[i ++]);
      }
    }

    const result = []
    for (let j = 0; j < num; j ++) {
      result.push(...arr);
    }

    return  {
      index: i,
      str: result.join(''),
    };
  }

  const { str } = getRepeatStr(1, 0);
  return str;
};

console.log(decodeString('10[d]'));
