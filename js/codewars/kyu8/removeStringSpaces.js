/* 
Simple, remove the spaces from the string, then return the resultant string.
*/

x = ' ferw asd ' // output: ferwasd

const noSpace = x => x.replace(/ +/g, '')

console.log(noSpace(x));