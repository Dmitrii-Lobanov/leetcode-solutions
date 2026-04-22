export const missingElement = (arr: number[]): number => {
	const n = arr.length;

	const expectedSum = ((n + 1) * (n + 2)) / 2;
	const actualSum = arr.reduce((acc, num) => acc + num, 0);

	return expectedSum - actualSum;
};
