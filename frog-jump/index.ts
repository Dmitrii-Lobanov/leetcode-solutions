export const forgJump = (start: number, end: number, jump: number): number => {
	if (start >= end) {
		return 0;
	}

	if (jump <= 0) {
		throw new Error("Jump must be positive");
	}

	const distance = end - start;

	return Math.ceil(distance / jump);
};
