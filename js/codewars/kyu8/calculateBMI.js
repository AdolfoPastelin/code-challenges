/* 

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

const weight = 10
const height = 10

const bmi = (weight, height) => {

	const bmi = weight / (height ** 2)
	let message = ""

	if (bmi <= 18.5) {
		message = 'Underweight'
	} else if(bmi <= 25.0){
		message = 'Normal'
	} else if(bmi <= 30.0){
		message = 'Overweight'
	} else if(bmi > 30){
		message = 'Obese'
	} else {
		message = 'Error: Wrong input'
	}

	return message
}

console.log(bmi(weight, height));