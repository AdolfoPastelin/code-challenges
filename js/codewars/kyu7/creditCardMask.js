/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

const cc = '34234432346900'

//? return masked string
function maskify(cc) {
	return cc.split('').map((letter, index) => index < cc.length - 4 ? '#' : letter).join('')
}

//? return masked string from a number input
// function maskify(cc) {
// 	const ccStr = cc.toString()
// 	return ccStr.split('').map((char, index) => index < ccStr.length - 4 ? '#' : char).join('')
// }

console.log(maskify(cc))