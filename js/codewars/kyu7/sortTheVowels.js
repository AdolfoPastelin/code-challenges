/*

In this kata, we want to sort the vowels in a special format.
Task

Write a function which takes a input string s and return a string in the following way:


				  C|                          R|
				  |O                          n|
				  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
				  W|                          T|
				  |A                          |e
				  R|                          5|
				  S|                          T|

Notes:

	List all the Vowels on the right side of |
	List every character except Vowels on the left side of |
	Return every character in its original case
	Each line is seperated with \n
	Invalid input ( undefined / null / integer ) should return an empty string

*/

let s = 'Codewars'

function sortVowels(s) {

	let str = ''

	if (s === null || s === undefined || isNaN(s)) {
		str = ''
	}

	for (let i = 0; i < s.length; i++) {
		if (s.charAt([i]) === 'a' || s.charAt([i]) === 'e' || s.charAt([i]) === 'i' || s.charAt([i]) === 'o' || s.charAt([i]) === 'u') {
			str += '|' + s[i] + '\n'
		} else {
			str += s[i] + '|' + '\n'
		}
	}

	return str
}

console.log(sortVowels(s));