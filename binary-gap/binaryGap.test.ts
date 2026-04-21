import { describe, expect, it } from "vitest";
import { binaryGap } from "./index";

describe("binaryGap", () => {
	it("returns the longest binary gap for 529", () => {
		expect(binaryGap(529)).toBe(4); // 1000010001
	});

	it("returns the longest binary gap when multiple gaps exist", () => {
		expect(binaryGap(1041)).toBe(5); // 10000010001
	});

	it("returns 2 for 9", () => {
		expect(binaryGap(9)).toBe(2); // 1001
	});

	it("returns 1 for 20", () => {
		expect(binaryGap(20)).toBe(1); // 10100
	});

	it("returns 3 for 561892", () => {
		expect(binaryGap(561892)).toBe(3);
	});

	it("throws when the number is 0", () => {
		expect(() => binaryGap(0)).toThrow("Number must be positive");
	});

	it("throws when the number is greater than 2147483647", () => {
		expect(() => binaryGap(2147483648)).toThrow(
			"Number must be less than 2147483647",
		);
	});

	it("returns 0 when there is no binary gap", () => {
		expect(binaryGap(15)).toBe(0); // 1111
	});

	it("returns 0 for 1", () => {
		expect(binaryGap(1)).toBe(0); // 1
	});

	it("returns 0 for the maximum allowed number if it has a gap of 1", () => {
		expect(binaryGap(2147483647)).toBe(0);
	});
});
