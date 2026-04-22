export const passingCars = (A: number[]) => {
	let passingCarsCount = 0;
	let eastCarsCount = 0;

	for (const car of A) {
		if (car === 0) {
			eastCarsCount++;
		} else {
			passingCarsCount += eastCarsCount;

			if (passingCarsCount > 1_000_000_000) {
				return -1;
			}
		}
	}

	return passingCarsCount;
};
