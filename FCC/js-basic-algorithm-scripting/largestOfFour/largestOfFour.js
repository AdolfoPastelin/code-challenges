function largestOfFour(arr) {
	let resultArr = [];

	for (let i = 0; i < arr.length; i++) {
		let largestNumber = arr[i][0];

		for (let j = 1; j < arr[i].length; j++) {
			if (arr[i][j] > largestNumber) {
				largestNumber = arr[i][j];
			}
		}
		resultArr[i] = largestNumber;
	}

	return resultArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [10, 11, 12, 13], [1000, 1001, 857, 1]]);