<?php

/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

 */

$numbers = [0, 3, 4, 5];

function square_sum(array $numbers): int
{
	$sum = 0;

	foreach ($numbers as $number) {
		$sum += $number ** 2;
	}

	return $sum;
}

echo square_sum($numbers);
