/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length, len2 = word2.length;
  const distance = []
  for (let i = 0; i <= len1; i ++) {
    distance[i] = distance[i] || [];
    distance[i][0] = i;
  }
  for (let i = 0; i <= len2; i ++) {
    distance[0][i] = i;
  }

  for (let i = 1; i <= len1; i ++) {
    for (let j = 1; j <= len2; j ++) {
      if (word1[i - 1] === word2[j - 1]) {
        distance[i][j] = distance[i - 1][j - 1];
      } else {
        distance[i][j] = Math.min(distance[i - 1][j - 1], distance[i - 1][j], distance[i][j - 1]) + 1;
      }
    }
  }

  return distance[len1][len2];
};

console.log(minDistance('abcd', 'dbba'));
