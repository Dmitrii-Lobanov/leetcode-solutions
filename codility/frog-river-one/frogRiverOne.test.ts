import { describe, expect, it } from "vitest";
import { frogRiverOne } from "./index";

describe("frogRiverOne", () => {
	it("returns 6 for the example case", () => {
		// Positions 1..5 are all covered at index 6
		expect(frogRiverOne([1, 3, 1, 4, 2, 3, 5, 4], 5)).toBe(6);
	});

	it("returns -1 when not all positions are covered", () => {
		// Position 5 never appears
		expect(frogRiverOne([1, 3, 1, 4, 2, 3, 4], 5)).toBe(-1);
	});

	it("works when positions are covered in order", () => {
		// Each new position appears sequentially
		expect(frogRiverOne([1, 2, 3, 4, 5], 5)).toBe(4);
	});

	it("works when positions are covered in reverse order", () => {
		// All positions covered by index 4
		expect(frogRiverOne([5, 4, 3, 2, 1], 5)).toBe(4);
	});

	it("handles repeated positions correctly", () => {
		// Repeats should not affect counting
		expect(frogRiverOne([1, 1, 1, 1, 2, 3], 3)).toBe(5);
	});

	it("returns 0 when X = 1 and first leaf is at position 1", () => {
		// Only one position needed
		expect(frogRiverOne([1], 1)).toBe(0);
	});

	it("handles minimal case with delay", () => {
		// First valid position appears later
		expect(frogRiverOne([2, 2, 2, 1], 2)).toBe(3);
	});

	it("works when last required position appears at the end", () => {
		expect(frogRiverOne([1, 2, 3, 4, 6, 6, 5], 6)).toBe(6);
	});

	it("handles large values within constraints", () => {
		const X = 1000;
		const arr = Array.from({ length: X }, (_, i) => i + 1);
		expect(frogRiverOne(arr, X)).toBe(X - 1);
	});

	it("returns earliest time, not later duplicates", () => {
		// All positions covered by index 2, later values irrelevant
		expect(frogRiverOne([1, 2, 3, 1, 2, 3], 3)).toBe(2);
	});
});
