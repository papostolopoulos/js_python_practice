//------------------------------------//
//            Week 1 Day 3            //
//------------------------------------//

/* Arrays
logEach
Write a function logEach(array) that prints every element of the array and its index to the console . Example:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson */


function logEach(array){
	for(var i = 0; i < array.length; i++){
		var newArr = array[i];
		var finalAnswer = newArr + ", index = " + i;
		console.log(finalAnswer);
	}
}

logEach(["Anthony", "John", "Carson"]);



//extra exercise: Print out 0-3
function funName (num){
	// console.log(num);
	for(var i = 0; i <= num; i++){
		console.log(i);
	}
}
funName(3);


/* maxValue
Write a function maxValue(array) that returns the largest value in the array. Assume array is an array of numbers.
> maxValue([43, 12, 6, 2])
43
> maxValue([])
null
> maxValue([-4, -10, 0.43])
0.43 */

function maxValue(array){
	if (0 < array.length){
	//This operator, Math.max(...array), causes the values in the array to be
	// expanded, or “spread” (i.e. three dots), into the function’s arguments.
		return Math.max(...array);
	}
}
maxValue([-4, -10, 0.43]); //0.43
maxValue([43, 12, 6, 2]); //43


//Extra exercise: Find the largest value in the array, but cannot use Math.max()
//method. Write a function by sorting the array and select the largest number.

function maxValue(array){
	var finalArray = array.sort(function(a, b){
		return a - b ;
	});
//return the array's largest value:
	return finalArray[finalArray.length - 1];
}
maxValue([-4, -10, 0.43]);


/* printRange

Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead. Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */

// //First option as potential answer:
function printRange(start, end){
	if(start < end){
		for(var i = start; i <= end; i++){
			console.log(i);
		}
	}
	else{
		console.log("Bad Range");
	}
}
printRange(22, 24);
printRange(5, 1);


//Alternative answer:

function printRange(start, end){
  for(var i = start; i <= end; i++){
    console.log(i);
  }
  if(start > end){
    console.log("This is a Bad Range");
  }
}
printRange(22, 24);
printRange(5, 1);



/* Functions
isPrime
Write a function isPrime(number) that returns a boolean indicating if number is prime or not.
Assume number is a positive integer.

> isPrime(2)
true
>isPrime(1693)
true
> isPrime(15)
false
> isPrime(303212)
false */

function isPrime(number){
 for(var i = 2; i < number; i++){
 	if(number % i === 0){
 		return false;
 	}
 }
 return true;
}
isPrime(303212);
isPrime(1693);


/* firstNPrimes
0. Using isPrime,
1. write a function firstNPrimes(n)
2. that returns an array
3. of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */


function firstNPrimes(n){
	var array = [];
	for(var i = 2; ; i++){
//invoke isPrime() and see if results of (i) === true.
		if(isPrime(i) === true){
			 array.push(i);
			}
//set another condition to break out of loop.
		if(array.length === n){
			break;
			}
		}
		return array;
	 }

firstNPrimes(3); // --> [2,3,5]
firstNPrimes(4); // --> [2,3,5,7]
firstNPrimes(5); // --> [2,3,5,7,11]



//Alternative for-loop answer:
function firstNPrimes(n){
	var array =[];
	for(var i = 2; n > array.length; i++){
		if(isPrime(i)){
			array.push(i);
		}
	}
	return array;
}
firstNPrimes(3);


//Alternative answer using while-loop:
function firstNPrimes(n){
	//set variable array to empty array
	var array = [];
	//set variable i to 2;
	var i = 2;
//the condition will run if the result of array.length
//does NOT equal n.  n represents whatever "first n prime numbers" 
			while(array.length !== n){
// Then if-statement take isPrime(i) equal to true.
			if(isPrime(i) === true){
//Then use .push(i) into the empty array.
				array.push(i);
		}
//iterate:
			i++;
		}
//return the answer/array:
		return array;
	}
//invoke the function:
firstNPrimes(5);



//Another Alternative answer:
function firstNPrimes(n){
	var array = [];
	var i = 2;
	while(n > array.length){
		if(isPrime(i)){
			array.push(i);
		}
		i++
	}
	return array;
}
firstNPrimes(5);
firstNPrimes(3);



//TEST EXAMPLE:
var testArr = [];
while(testArr.length < 4) {
	testArr.push("Hello");
}
testArr(4);



/* sumOfNPrimes

1. Using firstNPrimes, 
2. write a function sumOfNPrimes(n) - ok
3. that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */


function sumOfNPrimes(n){
	var totalSum = 0;
	for(var i = 0; i < firstNPrimes(n).length; i++){
		console.log(firstNPrimes(n)[i]);
		totalSum = totalSum + firstNPrimes(n)[i];
	}
	return totalSum;
}
sumOfNPrimes(4);


//Same exercise, but use. reduce() method instead:
function sumOfNPrimes(n){
	var totalSum = 0;
	totalSum = firstNPrimes(n).reduce(function(curr, accum){
		// console.log(firstNPrimes(n));
//taking current number and adding the element from array.
		return curr + accum;
	}, 0);
	return totalSum;
}
sumOfNPrimes(7);



//Extra exercise on SUM of array:
function sumOfArray(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		// console.log(arr[i])
		sum += arr[i];
	}
//returning the sum, NOT another array! 
	return sum;
}
sumOfArray([1, 4, 5, 6, 11]);




/*Comments from Paris
logEach: Even though you are printing out the index and the element for the array,
you are not printing it in the way the problem asks you to. Please go over the problem and
follow the correct format

Line 56: you also need to work on this

Try to remember that n represents the expected length of the array you will return
at the end and it does not relate with figuring out the prime numbers.*/
