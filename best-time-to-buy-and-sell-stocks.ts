function maxProfit(prices: number[]) {
  let maxProfit = 0;
  let i = 0;
  let j = i + 1;

  while (j < prices.length) {
    console.log(j, prices[j]);
    if (prices[i] > prices[j]) {
      i = j;
    } else {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }

    j++;
  }

  return maxProfit;
}

const input = [7, 2, 5, 3, 6, 4, 1, 8];
const output = maxProfit(input);
console.log(output);
