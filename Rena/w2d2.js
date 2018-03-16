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
//looping through the second array plus 1. You want
//to add 1 each time you increase i.
		for(var j = i + 1; j < array.length; j++){
		// console.log(array[j]);
			if((array[i] + array[j]) % 3 === 0){
			sumArr.push([i, j]);
			}
		}
	}
	console.log(sumArr);
}
divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
divisibleByThreePairSum([8, 3, 5, 9, 2]);


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
		for(var k = i + 1; k < array.length; k++){
			// console.log(array[j]);
			if(array[i] + array[k] === 0){
			newSum.push([i, k]);
		}
	}
}
console.log(newSum);
}
pairZero([0, 2, 5, -2, 0]);
pairZero([1, 2, -1])


/* isValidEmail:
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

//Potential solution, but only partially works:
function isValidEmail(email){
//looping through email string:
	for(var i = 0; i < email.length; i++){
//Use RegEx and .test() method to validate email string:
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
			return true;
		}
		else{
			console.log("You have entered an invalid email address. Try again!");
		}
//Once condition is satisfied, break from for-loop:
		break;
	}
}
isValidEmail("junk@gmail.com");
isValidEmail("now.what@now.co");
isValidEmail("my@website@gmail.com");
isValidEmail("anthony!@ladson.com");


//Alternative Solution - worked as group problem solving:
function isValidEmail(email) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphanumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","_","."];
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  for (var i = 0; i < split1.length; i++) {
    if (alphanumeric.indexOf(split1[i]) === -1) {
      console.log("condition 2");
      return false;
    }
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}

//Second solution with RegEx for each condition
function isValidEmail(email) {
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  if (!/^[A-Za-z0-9\._,]+$/.test(split1)) {
    console.log("condition 2");
    return false
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}

//Third solution with everything in one line
function isValidEmail(email) {
  return /^[A-Za-z0-9\._,]+@[A-Za-z]+\.[A-Za-z]+$/.test(email);
}


isValidEmail("junk@gmail.com");
isValidEmail("now.what@now.co");
isValidEmail("my@website@gmail.com");
isValidEmail("anthony!@ladson.com");


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

	function peakFinder(array){
		var highestPeak = [];
//compare element at position 0 is larger than element at position 1, then use .push(i):	
	if(array[0] > array[1]){
		highestPeak.push(i);
	}
	//looping through the length of array:
//start at index 1, next subtract -1 from array to get the element before the LAST element:
		for(var i = 1; i < array.length - 1; i++){
			// console.log(i);
//compare if element is larger than neighboring elements:
			if(array[i] > array[i-1] && array[i] > array[i+1]){
				highestPeak.push(i);
			}	
		}
//compare if element at last position of array is larger than neighboring element:
		if(array[array.length - 1] > array[array.length - 2]){
			highestPeak.push(array.length-1);
		}
		return highestPeak;
	}
	peakFinder([4,6,9,4,2,-7,2,-4,5]);

