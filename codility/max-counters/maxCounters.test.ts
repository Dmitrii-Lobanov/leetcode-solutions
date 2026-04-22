import { describe, expect, it } from "vitest";
import { maxCounters } from "./index";

describe("maxCounters", () => {
	it("returns the example result", () => {
		expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
	});

	it("returns all zeros when there are no operations", () => {
		expect(maxCounters(3, [])).toEqual([0, 0, 0]);
	});

	it("increments a single counter once", () => {
		expect(maxCounters(3, [2])).toEqual([0, 1, 0]);
	});

	it("increments the same counter multiple times", () => {
		expect(maxCounters(3, [2, 2, 2])).toEqual([0, 3, 0]);
	});

	it("handles a max counter operation after some increments", () => {
		expect(maxCounters(3, [1, 4])).toEqual([1, 1, 1]);
	});

	it("handles multiple max counter operations", () => {
		expect(maxCounters(3, [1, 4, 4, 2])).toEqual([1, 2, 1]);
	});

	it("applies lazy updates correctly when a counter is incremented after max counter", () => {
		expect(maxCounters(3, [1, 2, 4, 2])).toEqual([1, 2, 1]);
	});

	it("finalizes counters that were never touched after the last max counter", () => {
		expect(maxCounters(4, [1, 2, 5])).toEqual([1, 1, 1, 1]);
	});

	it("handles only max counter operations", () => {
		expect(maxCounters(4, [5, 5, 5])).toEqual([0, 0, 0, 0]);
	});

	it("works with N = 1", () => {
		expect(maxCounters(1, [1, 2, 1, 2])).toEqual([2]);
	});

	it("handles counters updated around several max operations", () => {
		expect(maxCounters(5, [1, 2, 6, 3, 6, 4, 4])).toEqual([2, 2, 2, 4, 2]);
	});

	it("does not mutate the operations array", () => {
		const operations = [3, 4, 4, 6, 1, 4, 4];
		const copy = [...operations];

		maxCounters(5, operations);

		expect(operations).toEqual(copy);
	});
});
