/*

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]

https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

let n = 35231;

const digitize = n => {

	//* Convert a number to a string Array
	const strArr = Array.from(n.toString()).reverse();

	//* Convert an Array of strings to array of numbers.
	const newNumArr = strArr.map((i) => Number(i));

	return newNumArr;
}

console.log(digitize(n));
