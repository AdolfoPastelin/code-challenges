/* Problem: 
	Count the number of times that a word is included in a given text.
	NOTE: The text can contain dots, hyphens, commas and semicolons.
*/

'use strict'

const text = 'hi there, welcome to rux-tech. If you like this. kind of videos, please click in subs-cribe button; and also click. the notification -bell to get alerts of every; new video- that I going to be uploading;'
function wordRepetitions(text) {
	// Helper function
	const normalize = word => word.toLowerCase().replace(/[!.,;-]/g, '')

	const dictionary = {}
	const separatedWords = text.split(" ")

	for (const word of separatedWords) {
		if (normalize(word) in dictionary) {
			dictionary[normalize(word)]++
		} else {
			dictionary[normalize(word)] = 1
		}
	}

	return dictionary
}

console.log(wordRepetitions(text))