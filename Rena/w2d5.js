//------------------------------------//
//            Week 2 Day 5            //
//------------------------------------//

/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose element sum is a multiple of five.

** Examples:
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [0, 4], [1, 3] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/


function divisibleByFivePairSum(array){
//create a variable for empty array.
	var result = [];
//looping thru to compare elements in array:
	for(var i = 0; i < array.length; i++){
//comparing the elements, but you must increase by 1:
		for(var j = i + 1; j < array.length; j++){
			// console.log(array[i], array[j]);
		//the sum of the pair of indices that is a multiple of 5:
				if((array[i] + array[j]) % 5 === 0){
					//console.log("in the if statement")
				result.push([i, j]);
			}
		}
	}
	return result;
}
divisibleByFivePairSum([1, 5, 2, 0, 4]);
divisibleByFivePairSum([13, 22, 8, -3, 12]);

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)

** Examples:
** myIndexOf([1, 2, 3, 4, 5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
//Use .indexOf() method returns the index within the calling String object.
//Returns -1 if the value is not found.
	return array.indexOf(ele);
}
myIndexOf(["a", "b", "c"], "d");
myIndexOf(["a", "b", "c"], "a");
myIndexOf([1, 2, 3, 4, 5], 5);

/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Examples:
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/


function minMaxDifference(array){
//Use spread operator(...) and find difference using Math.max and Math.min:
	return Math.max(...array) - Math.min(...array);
}
minMaxDifference([1,2,3,4,5]);
