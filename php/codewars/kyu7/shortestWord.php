<?php

// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort($str)
{
	$strArray = str_word_count($str, 1); //converts 1 string into an array of words
	$strShortWord = min($strArray); //get the min number of an array|string|int
	$strLength = strlen($strShortWord); //get the length of a string

	return $strLength; //returns the length (int) of the string
}

var_dump(findShort('wegewhfg sdjaas rigjw adsf wefnweof asfnn fejwenbgjm msewjnfwuj')); //4
var_dump(findShort('erng dasjwd ewiei as jreng dklfn as ewifj pfasknl eqofnoeqnf')); //2
