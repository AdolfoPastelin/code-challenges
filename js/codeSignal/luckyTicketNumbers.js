/* 
	Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of 
	the first half of the digits is equal to the sum of the second half.
	
	Given a ticket number n, determine if it's lucky or not.
*/

const n = 239149

function isLucky(n) {
	const numbers = String(n).split('').map(n => Math.abs(n))
	let count = 0

	numbers.forEach((num, index) => {
		index < numbers.length / 2 ? count += num : count -= num
	})

	return count === 0
}

console.log(isLucky(n))