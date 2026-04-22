import { describe, expect, it } from "vitest";
import { forgJump } from "./index";

describe("forgJump", () => {
	it("returns 0 when start is equal to end", () => {
		expect(forgJump(10, 10, 5)).toBe(0);
	});

	it("returns 0 when start is greater than end", () => {
		expect(forgJump(15, 10, 3)).toBe(0);
	});

	it("calculates correct number of jumps when divisible", () => {
		expect(forgJump(0, 10, 2)).toBe(5);
	});

	it("rounds up when distance is not divisible by jump", () => {
		expect(forgJump(0, 10, 3)).toBe(4); // 10 / 3 = 3.33 -> 4
	});

	it("works with non-zero start", () => {
		expect(forgJump(5, 14, 3)).toBe(3); // distance = 9 → 9/3 = 3
	});

	it("handles minimal jump size", () => {
		expect(forgJump(0, 5, 1)).toBe(5);
	});

	it("throws an error when jump is 0", () => {
		expect(() => forgJump(0, 10, 0)).toThrowError("Jump must be positive");
	});

	it("throws an error when jump is negative", () => {
		expect(() => forgJump(0, 10, -2)).toThrowError("Jump must be positive");
	});

	it("handles large numbers correctly", () => {
		expect(forgJump(0, 1_000_000, 3)).toBe(Math.ceil(1_000_000 / 3));
	});
});
