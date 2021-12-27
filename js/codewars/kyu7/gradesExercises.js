/* Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer,
, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her

according to the following rules:

*/

/* function getGrade(s) {
	let letter;
	// Write your code here

	let score = s[0].toLowerCase();
	// console.log(score);

	if (
		score.includes('a') ||
		score.includes('e') ||
		score.includes('i') ||
		score.includes('o') ||
		score.includes('u')
	) {
		letter = 'A';
	} else if (
		score.includes('b') ||
		score.includes('c') ||
		score.includes('d') ||
		score.includes('f') ||
		score.includes('g')
	) {
		letter = 'B';
	} else if (
		score.includes('h') ||
		score.includes('j') ||
		score.includes('k') ||
		score.includes('l') ||
		score.includes('m')
	) {
		letter = 'C';
	} else if (
		score.includes('n') ||
		score.includes('p') ||
		score.includes('q') ||
		score.includes('r') ||
		score.includes('s') ||
		score.includes('t') ||
		score.includes('v') ||
		score.includes('w') ||
		score.includes('x') ||
		score.includes('y') ||
		score.includes('z')
	){
		letter = 'D';
	}

	return letter;
}

console.log(getGrade('idfgt')); */


function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0].toLowerCase()):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0].toLowerCase()):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0].toLowerCase()):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0].toLowerCase()):
            letter = 'D';
            break;
    }
    return letter;
}

console.log(getLetter('aeoa'));