/* Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string,

, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

    First, print each vowel in 

on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in
.
Second, print each consonant (i.e., non-vowel) in
on a new line in the same order as it appeared in. */

function vowelsAndConsonants(s) {
    
	const text = s.toLowerCase();
	let vowels = '';
	let consonants = '';

	for (const letter of text) {

		if ('aeiou'.includes(letter)) {
			vowels += letter + '\n';
		} else if ('bcdfghjklmnopqrstvwxyz'.includes(letter)) {
			consonants += letter + '\n';
		}
	}

	return `${vowels}${consonants}`;
}

console.log(vowelsAndConsonants('javascriptloops'));