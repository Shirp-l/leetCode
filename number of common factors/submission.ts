function commonFactors(a: number, b: number) {
	let factors: number[] = [];
	for (let i = 1; i <= a || i <= b; i++) {
		if (a < b) {
			if (b % i === 0 && a % i === 0) {
				factors.push(i);
			}
		} else {
			if (a % i === 0 && b % i === 0) {
				factors.push(i);
			}
		}
	}
	return(factors.length);
}