export const frogRiverOne = (arr: number[], X: number): number => {
	const path = new Array(X).fill(false);
	let covered = 0;

	for (let i = 0; i < arr.length; i++) {
		const idx = arr[i] - 1; // map 1..X → 0..X-1

		if (!path[idx]) {
			path[idx] = true;
			covered++;
		}

		if (covered === X) {
			return i; // earliest time
		}
	}

	return -1;
};
