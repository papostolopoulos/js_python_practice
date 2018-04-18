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

function eachEl(el, idx, ary){
  return(`${el} is at position ${idx} in array ${ary}`);
}

 function myForEach(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    console.log(cb(arr[i], i, arr));
  }
 }

 myForEach([1,2,3], eachEl);


/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to
the callback.
It should return a new array of all the elements in the input array arr
where the callback cb returns true.
*/
function conditionEachEl(el, idx, ary){
  if (el % 2 !== 0) {
    return ary.splice(idx, 1);
  }
}


function mySelect(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
  return arr;
}

mySelect([1,2,3,4,5,6], conditionEachEl);

//Alternative solution
function conditionEachEl(el, idx, ary){
  return el;
}

function mySelect(arr, cb) {
  var endArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      endArr.push(cb(arr[i], i, arr));
    }
  }
  return endArr;
}

mySelect([1,2,3,4,5,6], conditionEachEl);

/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to
the callback.
It should return a new array of all the elements in the input array arr
where the callback cb returns false.
 */

function rejectCondition(el, idx, ary){
 return el % 2 === 0;
}

function rejectCondition2(el, idx, ary){
 return el % 2 !== 0;
}

function myReject(arr, cb) {
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

 myReject([1,2,3,4,5,6], rejectCondition); // [1,3,5]

 myReject([1,2,3,4,5,6], rejectCondition2); // [2,4,6]


/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of the callback
given the element in the corresponding position.
See the examples if this is confusing.*/

function mapIt1(el, idx, ary) {
  for (var i = 0; i < ary.length; i++) {
    el = el * 2;
  }
}

function myMap(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
  }
  return arr;
}

myMap([1,2,3], function(el, idx, arr) {
  return el * 2;
}); //[2, 4, 6]
myMap([1,2,3], function(el, idx, arr){
  return el + idx;
}); // [1, 3, 5]
myMap(["A", "B", "C"], function(el, idx, ary) {
  return el + idx;
}); // ["A0", "B1", "C2"]



/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num
and returns the value. -- TIP: THINK OF CLOSURES*/

function createExpFunc(num) {
  return function(num2){
    return Math.pow(num2, num);
  }
}

powerTwo(2); // 4
powerTwo(6); // 36


powerThree(2); // 8
powerThree(6); // 216


powerTen(2); // 1024
powerTen(6); // 60466176
