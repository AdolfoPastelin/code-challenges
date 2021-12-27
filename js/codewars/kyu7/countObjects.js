/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

//Function that filters equal values of o.x and o.y
const getCount = objects => objects.filter(o => o.x == o.y).length;
