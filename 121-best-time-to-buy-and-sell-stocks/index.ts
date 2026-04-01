/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = (prices: number[]): number => {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else {
			const profit = prices[i] - minPrice;
			maxProfit = Math.max(maxProfit, profit);
		}
	}

	return maxProfit;
};
