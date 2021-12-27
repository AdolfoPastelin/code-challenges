/* 
	Given a matrix, return the sum of the values that are not 0 or any number positionated below 0

	example:

	Matrix given
		const matrix = [
		[0, 1, 1, 2],
		[0, 5, 0, 0],
		[2, 0, 3, 3]
	] 

	Expected output: 9

	(Matrix result ignoring 0 and numbers below a 0)

	new matrix = [
		[0, 1, 1, 2],
		[0, 5, 0, 0],
		[0, 0, 0, 0]
	]
*/

const matrix = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3]
] // 9

/* 
new matrix = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[0, 0, 0, 0]
]
*/

function matrixElementsSum(matrix) {
	let sum = 0

	matrix.forEach((row, i) => {
		row.forEach((num, j) => {
			console.log(matrix[i][j]);
			if (matrix[i][j] === 0 && i + 1 < matrix.length) {
				matrix[i + 1][j] = 0
			}
			sum += matrix[i][j]
		})
	})


	return sum
}

console.log(matrixElementsSum(matrix))