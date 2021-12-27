/* 
	altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as 
to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
see the initial solution for details) such that each lowercase letter becomes uppercase and 
each uppercase letter becomes lowercase. For example:

*/

String.prototype.toAlternatingCase = function () {
	return this.split('').map(c => {
		return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
	}).join('')
}

console.log('ALTerNAtiNG CaSe'.toAlternatingCase()) // altERnaTIng cAsE