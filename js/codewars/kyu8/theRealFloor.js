/* codewars - kyu8 */

let n = -6;

const getRealFloor = (n) => {
	if (n == 1 || n == 0) {
		n = 0;
	} else if (n > 13) {
		n -= 2;
	} else if (n < 13 && n > 0) {
		n--;
	} else if (n < 0) {
		n * -1;
	}
	return n;
}

console.log(getRealFloor(n));