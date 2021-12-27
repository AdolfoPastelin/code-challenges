/* 

Complete the square sum function so that it squares each number passed into it and
then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

let numbers = [];

const squareSum = (numbers) => numbers.length !== 0 ? numbers.map(number => number ** 2).reduce((sum, number) => sum += number) : 0;

console.log(squareSum(numbers));