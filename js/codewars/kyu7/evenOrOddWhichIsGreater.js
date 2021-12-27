/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits.
Always a string of numbers will be given.

Cases:

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
if the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"

analysis:
- divide and iterate string
- store even and odd numbers in special variables and sum it
- display return message

*/

//str = '12' // even is greater than odd
//str = '123' // odd is greater than even
str = '112' // even and odd are the same

function evenOrOdd(str) {
	const numbers = str.split('')
	let evenSum = 0
	let oddSum = 0

	numbers.forEach(number => {
		if (number % 2 === 0) {
			return evenSum += Number(number)
		} else {
			return oddSum += Number(number)
		}
	})

	if (evenSum > oddSum) {
		return 'Even is greater than Odd'
	} else if (oddSum > evenSum) {
		return 'Odd is greater than Even'
	} else if (evenSum === oddSum) {
		return 'Even and Odd are the same'
	}
}

console.log(evenOrOdd(str));