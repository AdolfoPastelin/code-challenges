/* 
Complete the function which takes two arguments and returns all numbers which are divisible by 
the given divisor. First argument is an array of numbers and the second is the divisor.
Example

divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

*/

const numbers = [1, 2, 3, 4, 5, 6]
const divisor = 2

function divisibleBy(numbers, divisor) {
	return numbers.filter(number => number % divisor === 0)
}

console.log(divisibleBy(numbers, divisor))