/* Task

Complete the reverseString function; it has one parameter, s. You must perform the following actions:

    1.- Try to reverse string s using the split, reverse, and join methods.
	2.- If an exception is thrown, catch it and print the contents of the exception's message
		on a new line.
	3.- Print s on a new line. If no exception was thrown,
		then this should be the reversed string; if an exception was thrown, this should be the original string. */

function reverseString(s) {
	try {
		//convierte el string a un arreglo, separado por un cada caracter de un string dado.
		// (en este caso ninguno, ya que necesitamos todo el string en el arreglo tal cual)
		let textArray = s.split('');

		//invierte en sentido contrario el orden de los elementos de un arreglo
		let reverseText = textArray.reverse();

		//retorna un string convertido de un arreglo dado
		// (en este caso el arreglo anterior con el texto invertido con una letra en cada posicion)
		let newText = reverseText.join('');

		return newText;
	} catch (error) {
		console.log('Ha ocurrido el siguiente error: ' + error.message); //arroja solo el mensaje de la exception
	}
}

console.log(reverseString('Let it be'));
