/*
	https://adventjs.dev/challenges/02
*/

const letter = 'bici coche balón _playstation bici coche peluche  a  sdfdsf sdd s'

function listGifts(letter) {

	const items = letter.split(' ').filter((item) => !item.includes("_") && item !== '')
	const list = items.reduce((item, val) => (item[val] ? item[val]++ : item[val] = 1, item), {})
	return list
}

console.log(listGifts(letter))
