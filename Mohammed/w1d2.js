//------------------------------------//
//            Week 1 Day 2            //
//------------------------------------//

/* logBetween

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
Inclusive means that the the range that will be printed will include the lowNum and highNum.

logBetween(-1, 2); // from -1 to 2
logBetween(14, 6); //nothing printed
logBetween(4,6); //from 4 to 6 */

function logBetween(lowNum, highNum) {
  if (lowNum < highNum){
     return`from ${lowNum} to ${highNum}`; }
  else {
    return
  }
}

/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints
to the console every number from 0 to max that is divisible
by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12,
 and 18 */


function fizzBuzz(num) {
  i = 0

  while (i < num) {
    if ((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)){
      console.log(i);
    }
    i++;
  }
  false;
}


/* isFactorOf

Define a function isFactorOf(number, factor) that returns true if factor is
a factor of number. Otherwise, false.


isFactorOf(6,2); //true
isFactorOf(-6, 2); //true
isFactorOf(5,0); //false
 */
function isFactorOf(number, factor) {

var i = 0

while ( i < Math.abs(number)) {

  if ( i * (i+1) == Math.abs(number) ) {
    return true;
  }
  i++
}
return false;
}


/* isPrime
Define a function isPrime(number) that returns true if
number is prime. Otherwise, false. Assume number is a
positive integer.*/

function isPrime(number) {
var i = 2
while (i < number) {
  if ( number % i === 0) {
    return false;
  }
  i++
}
  return true;
}


// isPrime(2); //true
// isPrime(10); //false
// isPrime(15485863); //true
// isPrime(3548563); //false

/*Comments from Paris
logBetween: This is not what the problem is asking for. It is asking you to log
the numbers from lowNum to highNum and not create a string that reads "from lowNum to highNum"

isFactorOf: You are not using the second parameter (factor) in your function. Do you understand
what the problem is asking you to do? It wants you to confirm if the parameter "factor" is a factor of
the parameter "number". If you do not know what a factor of a number is, look it up online.
If you still cannot understand what it is, then ask me


*/
