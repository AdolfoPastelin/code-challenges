/* 					PROBLEM 1

	Complete the solution so that it returns true if the first argument(string) passed in ends (last character) 
	with the 2nd argument (also a string).

	Examples:

	solution('abc', 'c') // returns true
	solution('abc', 'd') // returns false

*/

// let str = 'abcde';
// let ending = 'cde';

// slice(-1) gets the last character of a string.
// includes() determine if a string can be found in other string
const solutionLastCharacter = (str, ending) => str.slice(-1).includes(ending.slice(-1));

// console.log(solution(str, ending));



/* 							PROBLEM 2
	https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

	Complete the solution so that it returns true if the first argument(string) passed in ends (last character) 
	with the 2nd argument (also a string).

	Examples:

	solution('abc', 'bc') // returns true
	solution('abc', 'd') // returns false
*/

let str = 'abcde';
let ending = 'cde';

function solution(str, ending) {
	
	return str.endsWith(ending);
}

console.log(solution(str, ending));
