/* 
	Some people are standing in a row park. There are trees between them which cannot
	be moved. Your task is to rearrange the people by their heights in a non descending
	order without moving the trees. People can be very tall!
*/

const TREE_HEIGHT = -1
const isTree = height => height === TREE_HEIGHT

const listOfHeights = [-1, 150, 190, 170, -1, 160, -1, 210]

function sortByHeight(listOfHeights) {
	const peopleHeights = listOfHeights
		.filter(height => !isTree(height))
		.sort((heightA, heightB) => heightA - heightB)

	return listOfHeights
		.map(height => {
			return isTree(height) ? height : peopleHeights.shift()
		})
}

console.log(sortByHeight(listOfHeights))