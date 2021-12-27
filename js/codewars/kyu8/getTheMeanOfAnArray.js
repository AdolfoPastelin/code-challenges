/* 
It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat
you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

let marks = [1,1,1,1,1,1,1,2]

/* INITIAL SOLUTION */
// function getAverage(marks) {
	
// 	let marksSum = marks.reduce((accumulator, currentValue) => accumulator + currentValue);
// 	let result = marksSum / marks.length;
// 	return Math.floor(result);
// }

/* FINAL SOLUTION */
const getAverage = marks => Math.floor(marks.reduce((accumulator, currentValue) => accumulator + currentValue) / marks.length)

console.log(getAverage(marks));
