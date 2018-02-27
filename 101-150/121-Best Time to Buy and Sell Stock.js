/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const maxPrices = [];

  if (prices.length > 0) {
    maxPrices[prices.length - 1] = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i --) {
      maxPrices[i] = Math.max(prices[i], maxPrices[i + 1]);
    }
  }

  let maxPrice = 0;
  for (let i = 0; i < prices.length - 1; i ++) {
    maxPrice = Math.max(maxPrice, maxPrices[i + 1] - prices[i]);
  }

  return maxPrice;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
