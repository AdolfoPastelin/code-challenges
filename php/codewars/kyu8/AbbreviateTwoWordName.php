<?php

/* Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes
two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F

*/

function abbrevName($name)
{

	//converts the string $name into an array of each word
	$fullName = str_word_count($name, 1);

	//store initials into variables
	$initial1 = $fullName[0][0];
	$initial2 = $fullName[1][0];

	//return the initials with a concatenate dot
	return strtoupper("$initial1.$initial2");
}

var_dump(abbrevName('Adolfo Pastelin'));
var_dump(abbrevName('Sam Harris'));
var_dump(abbrevName('Patrick Feenan'));
var_dump(abbrevName('Evan Cole'));
var_dump(abbrevName('P Favuzzi'));
var_dump(abbrevName('David Mendieta'));
var_dump(abbrevName('oavid sendieta'));
