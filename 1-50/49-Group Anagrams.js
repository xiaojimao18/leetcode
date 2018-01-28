/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};

  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(str);
  });

  return Object.values(map);
};

console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])));
