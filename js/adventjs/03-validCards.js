const letter = "(peluche) bici coche bici coche balón"

function isValid(letter) {
	let openParenthesis = 0
	let closedParenthesis = 0

	letter.split('').map(char => {
		if (char === '(') {
			openParenthesis++
		} else if (char === ')') {
			closedParenthesis++
		}
	})

	if (openParenthesis === closedParenthesis && openParenthesis > 0 && closedParenthesis > 0
		&& !letter.match(/[\[\[{}]/g) && !letter.match(/[(]\W+[)]|[(][)]/)) {
		return true
	} else {
		return false
	}
}

console.log(isValid(letter))