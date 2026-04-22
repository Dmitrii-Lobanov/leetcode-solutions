import { describe, expect, it } from "vitest";
import { permutationCheck } from "./index";

describe("permutationCheck", () => {
	it("returns 1 for a valid permutation", () => {
		// Contains all numbers 1..4 exactly once
		expect(permutationCheck([4, 1, 3, 2])).toBe(1);
	});

	it("returns 0 when a number is missing", () => {
		// Missing 2
		expect(permutationCheck([4, 1, 3])).toBe(0);
	});

	it("returns 0 when there are duplicates", () => {
		// Duplicate 1, missing 2
		expect(permutationCheck([1, 1, 3])).toBe(0);
	});

	it("returns 0 when values are out of range (greater than N)", () => {
		// 5 is out of range for N = 4
		expect(permutationCheck([1, 2, 3, 5])).toBe(0);
	});

	it("returns 0 when values are out of range (less than 1)", () => {
		// 0 is invalid
		expect(permutationCheck([0, 2, 3])).toBe(0);
	});

	it("returns 1 for single element array [1]", () => {
		expect(permutationCheck([1])).toBe(1);
	});

	it("returns 0 for single element array not equal to 1", () => {
		expect(permutationCheck([2])).toBe(0);
	});

	it("returns 1 for ordered permutation", () => {
		expect(permutationCheck([1, 2, 3, 4, 5])).toBe(1);
	});

	it("returns 1 for reverse ordered permutation", () => {
		expect(permutationCheck([5, 4, 3, 2, 1])).toBe(1);
	});

	it("returns 0 when multiple duplicates exist", () => {
		expect(permutationCheck([2, 2, 2, 2])).toBe(0);
	});

	it("handles large valid permutation", () => {
		const N = 1000;
		const arr = Array.from({ length: N }, (_, i) => i + 1);
		expect(permutationCheck(arr)).toBe(1);
	});

	it("returns 0 when one element is missing in large array", () => {
		const arr = [1, 2, 3, 5]; // missing 4
		expect(permutationCheck(arr)).toBe(0);
	});
});
