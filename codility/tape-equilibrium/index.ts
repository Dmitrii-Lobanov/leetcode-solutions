export const tapeEquilibrium = (arr: number[]): number => {
	let minDiff = Infinity;

	const totalSum = arr.reduce((acc, num) => acc + num, 0);
	let leftSum = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		leftSum += arr[i];
		const rightSum = totalSum - leftSum;

		const currDiff = Math.abs(leftSum - rightSum);

		if (currDiff < minDiff) {
			minDiff = currDiff;
		}
	}

	return minDiff;
};
