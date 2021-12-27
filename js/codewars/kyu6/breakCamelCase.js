/* 
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


CHALLENGE: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

const string = 'camelCaseTest'

const solution = string => string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')

console.log(solution(string));