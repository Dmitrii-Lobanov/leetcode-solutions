import { describe, expect, it } from "vitest";
import { passingCars } from "./index";

describe("passingCars", () => {
	it("should return correct count for basic example", () => {
		expect(passingCars([0, 1, 0, 1, 1])).toBe(5);
	});

	it("should return 0 when there are no passing cars (all east)", () => {
		expect(passingCars([0, 0, 0, 0])).toBe(0);
	});

	it("should return 0 when there are no passing cars (all west)", () => {
		expect(passingCars([1, 1, 1, 1])).toBe(0);
	});

	it("should handle alternating pattern", () => {
		expect(passingCars([0, 1, 0, 1, 0, 1])).toBe(6);
	});

	it("should handle single element array", () => {
		expect(passingCars([0])).toBe(0);
		expect(passingCars([1])).toBe(0);
	});

	it("should handle minimal passing case", () => {
		expect(passingCars([0, 1])).toBe(1);
	});

	it("should handle no valid pairs (west before east)", () => {
		expect(passingCars([1, 0])).toBe(0);
	});

	it("should return -1 when exceeding 1,000,000,000 pairs", () => {
		const size = 50000;
		const A = new Array(size).fill(0).concat(new Array(size).fill(1));
		expect(passingCars(A)).toBe(-1);
	});

	it("should handle large input efficiently", () => {
		const size = 100000;
		const A = Array.from({ length: size }, (_, i) => (i % 2 === 0 ? 0 : 1));
		expect(typeof passingCars(A)).toBe("number");
	});
});
