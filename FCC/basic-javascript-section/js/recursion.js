/* example - multiply with recursivity */

//* Recursive Multiplication

// let arr = [1, 2, 3, 4, 5]
// let n = 5

// function multiply(arr, n) {
// 	if (n <= 0) {
// 		return 1
// 	} else {
// 		return multiply(arr, n - 1) * arr[n - 1]
// 	}
// }

// console.log(multiply(arr, n))

//* Recursive Sum

let arr = [1, 2, 3, 4, 5]
let n = 5

function sum(arr, n) {
	if (n <= 0) {
		return 0
	} else {
		return sum(arr, n - 1) + arr[n - 1]
	}
}

console.log(sum(arr, n));