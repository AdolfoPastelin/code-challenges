/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

let numbers = '1 9 3 4 -5'

const highAndLow = (numbers) => {

	const sortedArray = numbers.split(' ').map(Number).sort((a, b) => {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	})

	return sortedArray[sortedArray.length - 1] + ' ' + sortedArray[0]

}

console.log(highAndLow(numbers))
