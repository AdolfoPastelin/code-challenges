/* 
	https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
	Take 2 strings s1 and s2 including only letters from a to z.
	Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
	Examples:
	a = "xyaabbbccccdefww"
	b = "xxxxyyyyabklmopq"
	longest(a, b) -> "abcdefklmopqwxy"

	a = "abcdefghijklmnopqrstuvwxyz"
	longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq";

// longest(s1, s2) - v4 refactored

function longest(s1, s2) {

	// Convert strings to arrays of each characters
	const array1 = s1.split('');
	const array2 = s2.split('');

	// concat() -> Concatenate the arrays into one
	// filter() -> Return arrays without duplicate characters
	// sort() and join() -> Sort the array in alphabetical order and converts it to a string
	return array1.concat(array2)
		.filter((item, pos, self,) => self.indexOf(item) == pos)
		.sort()
		.join('');;
}

console.log(longest(s1, s2));