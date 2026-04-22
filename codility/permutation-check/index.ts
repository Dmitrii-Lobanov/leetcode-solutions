export const permutationCheck = (arr: number[]) => {
	const seen = new Array(arr.length).fill(false);

	for (let i = 0; i < arr.length; i++) {
		const val = arr[i];

		if (val < 1 || val > arr.length) return 0;
		if (seen[val - 1]) return 0;

		seen[val - 1] = true;
	}

	return 1;
};

export const permutationCheck2 = (arr: number[]) => {
	const set = new Set(arr);

	if (set.size !== arr.length) return 0;

	for (let i = 1; i <= arr.length; i++) {
		if (!set.has(i)) return 0;
	}

	return 1;
};
