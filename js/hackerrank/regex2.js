// Problem
// https://www.hackerrank.com/challenges/js10-regexp-2/problem?isFullScreen=true

function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
	 * followed by one or more letters.
	 */
	let re = /(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+(?!.)/gm

	/*
	 * Do not remove the return statement
	 */
	return re;
}