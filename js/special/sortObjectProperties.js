const products = [
	{
		name: 'laptop',
		price: 18000
	},

	{
		name: 'desktop',
		price: 8000
	},

	{
		name: 'phone',
		price: 6000
	}
]

//? Sort scenarios
// 1.- < 0 ---- a comes first.
// 2.- > 0 ---- b comes first.
// 3.- 	 0 ---- Nothing will be changed.

//* in one line
function sortProductsByName(products) {
	return products.sort((a, b) => a.name < b.name ? -1 : b.name > a.name ? 1 : 0)
}

//* with an auxiliar function
// function sortProductsByName(products) {
// 	const compare = (a, b) => {
// 		if (a.name < b.name) {
// 			return -1
// 		} else if (b.name > a.name) {
// 			return 1
// 		} else {
// 			return 0
// 		}
// 	}

// 	return products.sort(compare)
// }

function sortProductsByPrice(products) {
	return products.sort((a, b) => a.price - b.price)
}

console.log(sortProductsByName(products))
console.log(sortProductsByPrice(products))