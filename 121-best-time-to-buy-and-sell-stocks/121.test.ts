import { describe, expect, it } from "vitest";
import { maxProfit } from "./index";

describe("maxProfit", () => {
	it("should return correct profit for typical case", () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
	});

	it("should return 0 when prices always decrease", () => {
		expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
	});

	it("should return 0 for constant prices", () => {
		expect(maxProfit([5, 5, 5, 5])).toBe(0);
	});

	it("should handle single day (no transaction possible)", () => {
		expect(maxProfit([5])).toBe(0);
	});

	it("should handle empty array", () => {
		expect(maxProfit([])).toBe(0);
	});

	it("should handle increasing prices", () => {
		expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
	});

	it("should find profit when minimum is in the middle", () => {
		expect(maxProfit([9, 8, 1, 5])).toBe(4);
	});

	it("should handle negative prices (edge case)", () => {
		expect(maxProfit([-3, -2, -1])).toBe(2);
	});

	it("should not mutate the input array", () => {
		const prices = [7, 1, 5, 3];
		const copy = [...prices];

		maxProfit(prices);

		expect(prices).toEqual(copy);
	});

	it("should handle large random input consistently", () => {
		const prices = Array.from({ length: 100 }, () =>
			Math.floor(Math.random() * 1000),
		);

		const result = maxProfit(prices);

		// Compare with brute force solution
		let expected = 0;
		for (let i = 0; i < prices.length; i++) {
			for (let j = i + 1; j < prices.length; j++) {
				expected = Math.max(expected, prices[j] - prices[i]);
			}
		}

		expect(result).toBe(expected);
	});
});
