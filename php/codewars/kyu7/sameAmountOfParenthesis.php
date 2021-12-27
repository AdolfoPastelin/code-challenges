<?php

/* check in a function is a given string has the same amount of open and close parenthesis */

$str = '(((Hel(l(o P)et)er)))';

function sameAmountOfParenthesis(String $str): bool
{
	$openParenthesis = 0;
	$closedParenthesis = 0;
	$charArr = str_split($str);

	foreach ($charArr as $char) {
		if ($char === '(') {
			$openParenthesis++;
		} else if ($char === ')') {
			$closedParenthesis++;
		}
	}

	return $openParenthesis === $closedParenthesis;
}

var_dump(sameAmountOfParenthesis($str));
