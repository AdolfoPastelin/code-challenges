/* 
	Given an array of strings, return the longest elements
*/

const inputArray = ["aba", "aa", "ad", "vcd", "aba"]

function allLongestStrings(inputArray) {
	const lengths = inputArray.map((el => el.length))
	const longestString = Math.max(...lengths)

	return inputArray.filter(el => el.length === longestString)
}

console.log(allLongestStrings(inputArray))