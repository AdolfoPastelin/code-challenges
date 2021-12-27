/* This code generates a number between a given range */

function randomNumberRange(minNum, maxNum) {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

console.log(randomNumberRange(7, 17))