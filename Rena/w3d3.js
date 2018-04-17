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


 function myForEach(arr, cb){
  
 }


/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns true.
*/



/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns false.

 */

function myReject(arr, cb) {
  //enter your code here
}

 myReject([1,2,3,4,5,6], /*run your callback function here*/); // [1,3,5]

 myReject([1,2,3,4,5,6], /*Run your callback function here*/); // [2,4,6]


/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of the callback
given the element in the corresponding position.
See the examples if this is confusing.*/

function myMap(arr, cb) {
  // enter your code here
}

myMap([1,2,3], /*run your callback here*/); //[2, 4, 6]
myMap([1,2,3], /*run your callback here*/); // [1, 3, 5]
myMap(["A", "B", "C"], /*run your callback here*/); // ["A0", "B1", "C2"]



/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num
and returns the value. -- TIP: THINK OF CLOSURES*/

function createExpFunc(num) {

}

powerTwo(2); // 4
powerTwo(6); // 36


powerThree(2); // 8
powerThree(6); // 216


powerTen(2); // 1024
powerTen(6); // 60466176
