/* 
	Given two strings, count the number of letters repeated in both strings
*/

const s1 = 'aabc'
const s2 = 'adcaa'

function commonCharacterCount(s1, s2) {
	let count = 0

	for (const letter of s1) {
		if (s2.includes(letter)) {
			count++
			s2 = s2.replace(letter, '')
		}
	}

	return count
}

console.log(commonCharacterCount(s1, s2))