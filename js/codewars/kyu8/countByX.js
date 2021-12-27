/* 

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

let x = 5
let n = 25

const countBy = (x, n) => {
	let arr = [];
	let result = [];

	for (let i = 1; i <= n; i++) {
		result += [...arr, (i * x) + ','];
	}
	
	return result.split(',').slice(0, -1).map(r => +r);
}

console.log(countBy(x, n));