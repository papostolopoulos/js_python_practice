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
  for (var i = 0; i < array.length; i++) {
    console.log(i + ": " + array[i])
  }
}

/* maxValue
Write a function maxValue(array) that returns the largest value in the array.
Assume array is an array of numbers.
> maxValue([43, 12, 6, 2])
43
> maxValue([])
null
> maxValue([-4, -10, 0.43])
0.43 */
function maxValue(array){

  if (0 < array.length ) {
  return Math.max(...array)
}
  return null;
}
/* CAN YOU FIND ANOTHER WAY TO SOLVE THIS PROBELM W/O USING .MAX METHOD?         */


/* printRange

Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead. Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */

/* printRange */


function printRange(start, end){
  for(var i = start; i <= end; i++){
    console.log(i);
  }
  if(start > end){
    console.log("Bad Range");
  }
}
=============

Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead. Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */

function printRange(start, end) {
  if (start < end) {
    for (var i = start; i <= end; i++) {
      console.log(i);
    }
  }
  else {
    console.log("the range is bad");
  }

}

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
/*  Note : A prime number (or a prime) is a natural number greater than 1 that
has no positive divisors other than 1 and itself
https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
.*/

function isPrime(number) {
      if(number < 2) return false;
      for (var i = 2; i < number; i++) {
          if(number%i==0)
              return false;
      }
    return true;
  }




/* firstNPrimes
Using isPrime, write a function firstNPrimes(n) that returns an array of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)

> firstNPrimes(5)
[2, 3, 5, 7, 11] */

function firstNPrimes(n) {
    for (var i = 0; i < n.length; i++) {
      isPrime(i)
    }
  return i
}


/* sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */


/*Comments from Paris
Line 35. Remember that you need to work on this

Remember that is JavaScript there is truthy vs falsey and true and false. It is usually better to use === instead of ==.
See line 106. Try to find references online that explain what the difference is.

firstNPrimes
Line 127: You are writting "i < n.length". What kind of data type is n? Does it have a length?

- Try to remember that n represents the expected length of the array you will need to return
at the end. n does not relate to you figuring out the prime numbers.
*/
