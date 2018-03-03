//------------------------------------//
//            Week 2 Day 2            //
//------------------------------------//

/* divisibleByThreePairSum

Write a function divisibleByThreePairSum(array) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of three.

> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]] */


function divisibleByThreePairSum(array){
	var sumArr = [];
//looping through the array length:
	for(var i = 0; i < array.length; i++){
// console.log(array[i]);
		if(array[i] % 3 === 0){
			sumArr.push(i);
		}
	}
	console.log(sumArr);
}
divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);



/* Sometimes you will need to nest a loop inside of another loop.
Let's say we are given an array and have to return the indices of all pair of elements that sum to 0.
This means we we will have to add each element to the other elements in the array.

> pairZero([4, 1, 0,])
[ ]
> pairZero([1, 2, -1])
[ [0, 2] ]
> pairZero([0, 2, 5, -2, 0])
[ [0, 4], [1, 3] ] */


function pairZero(array){
	var newSum = [];	

	for(var i = 0; i < array.length; i++){
		// console.log(array[i]);
		if(array[i].indexOf() === 0) //this is incorrect, in wrong place??
			newSum.push(i);
	}
console.log(newSum);
}
pairZero([0, 2, 5, -2, 0]);


/* isValidEmail
>isValidEmail("junk@gmail.com"); --> true
>isValidEmail("now.what@now.co"); --> true
>isValidEmail("i_am_happy@feelings.net"); --> true
>isValidEmail("my@website@gmail.com"); --> false
>isValidEmail("webby@gmail.co.net"); --> false
>isValidEmail("anthony@ira_ladson.com"); --> false
>isValidEmail("anthony!@ladson.com"); --> false

Write a function isValidEmail(email) that takes an email string. Return true if the email is considered valid. A valid email:
Contains one and only one "@" symbol
All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
There is one and only one dot "." after the "@" symbol
Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];*/
// isValidEmail("junk@gmail.com"); //--> true
// isValidEmail("now.what@now.co"); //--> true
// isValidEmail("i_am_happy@feelings.net"); //--> true
// isValidEmail("my@website@gmail.com"); //--> false
// isValidEmail("webby@gmail.co.net"); //--> false
// isValidEmail("anthony@ira_ladson.com"); //--> false
// isValidEmail("anthony!@ladson.com"); //--> false */



/* peakFinder

Write a function peakFinder(array) that takes in an array of numbers.
It should return an array containing the indices of all the peaks.
A peak is an element that is greater than both of its neighbors.
If it is the first or last element, it is a peak if it is greater than its one neighbor.
Assume the array has a length of at least 2.
peakFinder([1,2,3,2,1]); //[2]
peakFinder([2,1,2,3,4,5]); //[0, 5]
peakFinder([4,6,9,4,2,-7,2,-4,5]); //[2,6,8]
*/



/* Notes from Rena:

1) divisibleByThreePairSum: When I run my function, I get [1, 2, 5] as the answer. Which is incorrect, but
at least my function is running without errors.  Am I understanding how to break down the problem 
correctly in my if-statement?

2) I am a bit confused by instructions, but I tried to interpret what it's asking...??  I know I need to nest my for-loop, but
wanted to use .indexOf() method, but not sure...???

3) Regarding email validation requirement: Before I start on this, I am guessing I should somehow incorporate RegEx and 
try to do a comparison to get output, correct?

Will work on remaining problems later...have errands to run with family now!

*/


