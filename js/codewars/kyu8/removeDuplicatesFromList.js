/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/

const a = [1, 2, 2, 4, 5, 5, 6]

const distinct = a => [...new Set(a)]

console.log(distinct(a))