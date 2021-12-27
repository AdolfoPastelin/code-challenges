/* 
In this kata your task is to remove all the duplicates from the 
array using a standart build-in method - Array.prototype.filter(); 
return the array containing unique values only.

For example:

const arr = [4];

unique(arr); // should return [4]

const arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]
*/

const arr = [1, 2, 2, 3, 3, 3, 3]

function unique(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(unique(arr))