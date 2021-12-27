/*
https://www.codewars.com/kata/5818d00a559ff57a2f000082/train/javascript
*/

let n = 6

function pell(n) {

	let a = 1
	let b = 2
	let c = 0

	if (n === 0) {
		return 0
	} else if (n === 1) {
		return 1
	} else if (n >= 2) {
		for (let i = 3; i <= n; i++) {
			c = 2 * b + a
			a = b
			b = c
		}
	} else {
		return 'invalid number'
	}
	return b
}

console.log(pell(n))