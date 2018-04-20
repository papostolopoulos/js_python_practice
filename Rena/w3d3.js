//------------------------------------//
//            Week 3 Day 3            //
//------------------------------------//

/*
Higher-Order Functions
Write a function myForEach(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself 
to the callback.
Do not use the built-in Array.prototype.forEach method. The return value 
is irrelevant.

 1 is at position 0 in array [1,2,3]
 2 is at position 1 in array [1,2,3]
 3 is at position 2 in array [1,2,3] */


//The callback function is located in global scope:
//el represents array[i]
//x represents i
//arr represents array
function myResult(el, x, arr){
	return el + ' is at position ' + x + " in array: " + arr;
}
//cb represents myResult().  You are calling the 
//myResult() function inside myForEach() function.
 function myForEach(array, cb){
 	for(var i = 0; i < array.length; i++){
 		console.log(cb(array[i], i, array))
 	}
 }

 myForEach([1,2,3], myResult);


/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns true.
*/


function mySelect(array, cb){
	for(var i = 0; i < array.length; i++){
		cb(array[i], i, array);
	}
return array;
}

//The callback function is located in global scope:
//el represents array[i]
//y represents i
//arr2 represents array
function myTrue(el, y, arr2){
//if el is not true, then .splice() arr2:
	if(el % 2 !== 0){
		return arr2.splice(y, 1);
	}
}

mySelect([0, 2, 5, 6, 8], myTrue);




/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback
cb returns false.

 */

//The callback function is located in global scope:
//el represents array[i]
//z represents i
//array represents array

 function myEven(el, z, array){
 //the el represents even number; you are splicing
 //on the odd number and returning even numbers.
 	if(el % 2 !== 0){
 		return array.splice(z, 1);
 	}
 }

//The callback function is located in global scope:
//el represents array[i]
//y represents i
//array represents array
 function myOdd(el, y, array){
 //the el represents odd number; you are splicing
 //on the even number and returning odd numbers.
 	if(el % 2 === 0){
 		return array.splice(y, 1);
 	}
 }

function myReject(arr, cb) {
	for(var i = 0; i < arr.length; i++){
		cb(arr[i], i, arr);
	}
	return arr;
}


 myReject([1,2,3,4,5,6], myOdd/*run your callback function here*/); // [1,3,5]

 myReject([1,2,3,4,5,6], myEven /*Run your callback function here*/); // [2,4,6]


/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array 
itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of 
the callback given the element in the corresponding position.
See the examples if this is confusing.*/

function timesTwo(el){
//multiply each element in array by 2
	return el * 2;
}

function addIndex(el, i){
	return el + i;
}

function alphabet(el, i){
	 return el + i;
}


function myMap(arr, cb) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
  	newArr.push(cb(arr[i], i, arr));
  }
  return newArr;
}

myMap([1,2,3], timesTwo/*run your callback here*/); //[2, 4, 6]
myMap([1,2,3], addIndex/*run your callback here*/); // [1, 3, 5]
myMap(["A", "B", "C"], alphabet /*run your callback here*/); // ["A0", "B1", "C2"]



/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num
and returns the value. -- TIP: THINK OF CLOSURES*/

// closures: you are returning a function
//within a function
function createExpFunc(num) {
	return function(num2){
		return Math.pow(num2, num);
	}
}

var powerTwo = createExpFunc(2);
powerTwo(2);

var powerTen = createExpFunc(10);
powerTen(6);

var powerThree = createExpFunc(3);
powerThree(2);


// example of function expression:
var powerTen = function(num2, num){
		return Math.pow(num2, num);
	}


powerTwo(2); // 4
powerTwo(6); // 36


powerThree(2); // 8
powerThree(6); // 216

powerTen(2); // 1024
powerTen(6); // 60466176
