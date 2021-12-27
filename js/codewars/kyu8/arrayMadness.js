/*

SpeedCode #2 - Array Madness
Objective

Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element
in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

*/

const a = [4, 5, 6]
const b = [1, 2, 3]

/* function arrayMadness2(a, b) {
	const totalA = a.reduce( (accumulator, currentValue) => accumulator += currentValue ** 2, 1 )
	const totalB = b.reduce( (accumulator, currentValue) => accumulator += currentValue ** 3, 1 )

	return totalA > totalB ? true : false
} */

const arrayMadness = (a, b) => {
	const totalA = a.reduce( (accumulator, currentValue) => accumulator += currentValue ** 2, 1 )
	const totalB = b.reduce( (accumulator, currentValue) => accumulator += currentValue ** 3, 1 )

	return totalA > totalB ? true : false
}

console.log(arrayMadness(a, b));