import { describe, expect, it } from "vitest";
import { oddOccurencyInArray } from "./index";

describe("oddOccurencyInArray", () => {
	it("returns the number that appears an odd number of times", () => {
		expect(oddOccurencyInArray([1, 2, 2, 1, 1])).toBe(1);
	});

	it("returns the only element when the array has one item", () => {
		expect(oddOccurencyInArray([42])).toBe(42);
	});

	it("works with negative numbers", () => {
		expect(oddOccurencyInArray([-1, -1, -1, 2, 2])).toBe(-1);
	});

	it("works with zero", () => {
		expect(oddOccurencyInArray([0, 1, 1, 0, 0])).toBe(0);
	});

	it("returns the first odd-occurring number based on insertion order when multiple exist", () => {
		expect(oddOccurencyInArray([3, 3, 3, 2, 2, 2, 1])).toBe(3);
	});

	it("throws when the array length is even", () => {
		expect(() => oddOccurencyInArray([1, 1, 2, 2])).toThrow(
			"Array must have an odd number of elements",
		);
	});
});
