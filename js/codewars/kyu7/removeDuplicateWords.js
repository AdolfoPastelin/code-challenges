/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

*/

const s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

const removeDuplicateWords = (s) => {
	return s.split(' ').filter( (currentValue, index, strArr) => {
		return strArr.indexOf(currentValue) == index
	}).join(' ')
}

console.log(removeDuplicateWords(s));