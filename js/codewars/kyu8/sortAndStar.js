/* 

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.

https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

*/

/* 

---- Solving steps ----
1.- Sort array alphabetically
2.- Return the first word in the array (following alphabetical order)
3.- Return that word letter by letter adding *** between each letter 

---- Example ----
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );

 */

let s = ['bitcoin',
		'take',
		'over',
		'the',
		'world',
		'maybe',
		'who',
		'knows',
		'perhaps']

const twoSort = s => s.sort()[0].split('').join('***')

console.log(twoSort(s));