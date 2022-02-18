'use strict'

let grid = [1, 2, 3, 6, 9, 8, 7, 4]
const ids = [1, 2, 3, 6, 9, 8, 7, 4]
const btn5 = document.querySelector('#btn5')

btn5.addEventListener('click', () => {
	grid.unshift((grid.pop()))
	for (let i = 0; i <= 7; i++) {
		document.getElementById('btn' + ids[i]).innerHTML = grid[i]
	}
})