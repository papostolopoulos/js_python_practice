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
  var newArray = []
   for (var i = 0 ; i < array.length ; i++) {
     for (var j = 0 ; j < array.length ; j++) {
       if ((array[i] + array[j]) % 3 === 0) {
         newArray.push([i, j])
       }
     }
 }
   return newArray;
}



/* Sometimes you will need to nest a loop inside of another loop.
Let's say we are given an array and have to return the indices of all pair of elements that sum to 0.
This means we we will have to add each element to the other elements in the array.

> pairZero([4, 1, 0,])
[ ]
> pairZero([1, 2, -1])
[ [0, 2] ]
> pairZero([0, 2, 5, -2, 0])
[ [0, 4], [1, 3] ] */

/// I just feel I am not understanding the question

function pairZero(array){
var result = [];
for (var i = 0; i < array.length; i++){
  for (var j = i + 1; j < array.length; j++){
    if (array[j] === sum - array[i]){
      result.push([array[i], array[j]])
    }
  }
}
return result;
}


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

// Notes for Paris, I did my best to solve this problem, there is problem in line 155
function peakFinder(array) {

var newArray = [];
  if ( array.length === 2) {
    if (array[0]> array[1]){
      return array[0];
    }
      return array[1];
    }
  for (var i in array){
      //console.log("i statment of an array" + i);
    if ((array[i-1] <= array[i]) && (array[i] >= array[i + 1])){
      newArray.push(array[i]);
      //console.log("newArray elements " + newArray);
    }
  }
	return newArray;
}
