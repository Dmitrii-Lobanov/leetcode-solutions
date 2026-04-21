export const oddOccurencyInArray = (arr: number[]): number | undefined => {
	if (arr.length % 2 !== 1)
		throw new Error("Array must have an odd number of elements");

	const counts = new Map<number, number>();

	for (const num of arr) {
		counts.set(num, (counts.get(num) ?? 0) + 1);
	}

	for (const [num, count] of counts.entries()) {
		if (count % 2 !== 0) return num;
	}
};
