<?php
/* 
	Complete the function/method so that it returns the url with 
	anything after the anchor (#) removed.

	Examples
	"www.codewars.com#about" --> "www.codewars.com"
	"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function replaceAll(string $string): string
{
	$result = '';

	for ($i = 0; $i < strlen($string); $i++) {
		if ($string[$i] === '#') {
			break;
		}

		$result .= $string[$i];
	}

	return $result;
}
