/* NOTE: This lecture consist in matrix manipulation */

//* Matrix Multiplication

let arr = [
	[1, 2, 3],
	[4, 5],
	[6, 7]
]

function matrixMultiplication(arr) {
	let product = 1

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			product *= arr[i][j]
		}
	}

	return product
}

console.log(matrixMultiplication(arr))

//* Matrix Sum

// let arr = [
// 	[2, 5, 9],
// 	[1, 7],
// 	[3, 0, 8]
// ]

// function matrixSum(arr) {
// 	let sum = 0

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			sum += arr[i][j]
// 		}
// 	}

// 	return sum
// }

// console.log(matrixSum(arr))