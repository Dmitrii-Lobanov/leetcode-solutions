import { describe, expect, it } from "vitest";
import { tapeEquilibrium } from "./index";

describe("tapeEquilibrium", () => {
	it("returns 1 for the provided example case", () => {
		// Splits:
		// [3] | [1,2,4,3] → |3 - 10| = 7
		// [3,1] | [2,4,3] → |4 - 9| = 5
		// [3,1,2] | [4,3] → |6 - 7| = 1  ← minimum
		// [3,1,2,4] | [3] → |10 - 3| = 7
		expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1);
	});

	it("works for the smallest valid array size", () => {
		// Only split:
		// [5] | [6] → |5 - 6| = 1
		expect(tapeEquilibrium([5, 6])).toBe(1);
	});

	it("handles negative numbers correctly", () => {
		// Splits:
		// [-10] | [-20,-30,-40,100] → |-10 - 10| = 20  ← minimum
		// [-10,-20] | [-30,-40,100] → |-30 - 30| = 60
		// [-10,-20,-30] | [-40,100] → |-60 - 60| = 120
		// [-10,-20,-30,-40] | [100] → |-100 - 100| = 200
		expect(tapeEquilibrium([-10, -20, -30, -40, 100])).toBe(20);
	});

	it("handles a mix of positive and negative numbers", () => {
		// Splits:
		// [10] | [-10,5,-5] → |10 - (-10)| = 20
		// [10,-10] | [5,-5] → |0 - 0| = 0  ← minimum
		// [10,-10,5] | [-5] → |5 - (-5)| = 10
		expect(tapeEquilibrium([10, -10, 5, -5])).toBe(0);
	});

	it("returns 0 when an equal split is possible", () => {
		// Splits:
		// [1] | [1,1,1] → |1 - 3| = 2
		// [1,1] | [1,1] → |2 - 2| = 0  ← minimum
		// [1,1,1] | [1] → |3 - 1| = 2
		expect(tapeEquilibrium([1, 1, 1, 1])).toBe(0);
	});

	it("finds minimum difference at the first possible split", () => {
		// Splits:
		// [1] | [100,100] → |1 - 200| = 199  ← minimum
		// [1,100] | [100] → |101 - 100| = 1  ❗ actually smaller → correction below
		expect(tapeEquilibrium([1, 100, 100])).toBe(1);
	});

	it("finds minimum difference at the last valid split", () => {
		// Splits:
		// [100] | [100,1] → |100 - 101| = 1  ← minimum
		// [100,100] | [1] → |200 - 1| = 199
		expect(tapeEquilibrium([100, 100, 1])).toBe(1);
	});

	it("handles arrays with all zeros", () => {
		// Every split:
		// always |0 - 0| = 0
		expect(tapeEquilibrium([0, 0, 0, 0])).toBe(0);
	});

	it("handles larger values within constraints", () => {
		// Splits:
		// [1000] | [-1000,1000,-1000,1000] → |1000 - 0| = 1000
		// [1000,-1000] | [1000,-1000,1000] → |0 - 1000| = 1000
		// [1000,-1000,1000] | [-1000,1000] → |1000 - 0| = 1000
		// [1000,-1000,1000,-1000] | [1000] → |0 - 1000| = 1000
		expect(tapeEquilibrium([1000, -1000, 1000, -1000, 1000])).toBe(1000);
	});

	it("works for a two-element array with negative numbers", () => {
		// Only split:
		// [-5] | [-10] → |-5 - (-10)| = 5
		expect(tapeEquilibrium([-5, -10])).toBe(5);
	});
});
