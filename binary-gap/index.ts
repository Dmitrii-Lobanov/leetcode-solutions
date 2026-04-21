export const binaryGap = (num: number): number => {
	if (!num && num <= 0) throw new Error("Number must be positive");

	if (num > 2147483647) throw new Error("Number must be less than 2147483647");

	const binaryString = num.toString(2);

	const gaps: number[] = binaryString
		.split("1")
		.slice(1, -1)
		.filter((item) => item.length > 0)
		.map((item) => item.length);

	return gaps.length ? Math.max(...gaps) : 0;
};
