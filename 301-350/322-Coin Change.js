/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => a - b);

  const minNum = [0];
  for (let i = 0, len = coins.length; i < len; i ++) {
    minNum[coins[i]] = 1;
  }

  for (let i = 1; i <= amount; i ++) {
    if (!minNum[i]) {
      continue;
    }

    for (let j = 0, len = coins.length; j < len && i + coins[j] <= amount; j ++) {
      if (minNum[i + coins[j]]) {
        minNum[i + coins[j]] = Math.min(minNum[i + coins[j]], minNum[i] + 1);
      } else {
        minNum[i + coins[j]] = minNum[i] + 1;
      }
    }
  }

  return typeof minNum[amount] === 'undefined' ? -1 : minNum[amount];
};

console.log(coinChange([2], 0));
