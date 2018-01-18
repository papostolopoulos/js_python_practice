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
// function printRange(start, end){
// 	if(start < end){
// 		for(var i = start; i <= end; i++){
// 			console.log(i);
// 		}
// 	}
// 	else{
// 		console.log("Bad Range");
// 	}
// }
// printRange(22, 24);
// printRange(5, 1);


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
Using isPrime, write a function firstNPrimes(n) that returns an array of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */


// function firstNPrimes(n){
// var array = [];
//  for(var i = 2; i < n; i++){
// // 	console.log(i);
//  	if(n % i === 0){
//         array.push(i);
//  	}
//  }
//   console.log(array);
// }
// console.log("Try again!");

// firstNPrimes(4);


function firstNPrimes(n){
	var array = [];
	 	if(n === 0){
	 		for(var i = 2; i < n.length; i++){
	 		// console.log(isPrime(n));
	 		}
	 		console.log(isPrime(n)).push(array);
	 	}
	 }
	 // return false;

firstNPrimes(4);


/* sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */

function sumofNPrimes(n){

}
sumOfNPrimes(1);
