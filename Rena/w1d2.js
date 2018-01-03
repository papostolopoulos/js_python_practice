
//------------------------------------//
//            Week 1 Day 2            //
//------------------------------------//

/* logBetween

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
Inclusive means that the the range that will be printed will include the lowNum and highNum.

logBetween(-1, 2); // from -1 to 2
logBetween(14, 6); //nothing printed
logBetween(4,6); //from 4 to 6 */


function logBetween(lowNum, highNum){
//empty variable
    var num = " ";
    for(var i = lowNum; i <= highNum; i++){
    //iterate through loop and separate number by comma.
      num += i + ',';
    }
//have return num outside of forloop to produce every number in between
//lowNum and highNum
    return num;
}

logBetween(4, 6);
logBetween(-1, 2);




/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints to the console every number
from 0 to max that is divisible by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18 */

function fizzBuzz(max){
  var numBuzz = " ";
//looping through numbers
  for(var i = 0; i <= max; i++){
    // console.log(fizzBuzz);
    if(max % 3 === 0 || max % 5 === 0){
//print answer and separate numbers by comma
      console.log(numBuzz += i + ',');
    }
//this else statement can be removed
    else{
      console.log("Start over again!");
    }
  }
}
fizzBuzz(50);

/* isFactorOf

Define a function isFactorOf(number, factor) that returns true if factor is a factor of number. Otherwise, false.

isFactorOf(6,2); //true
isFactorOf(-6, 2); //true
isFactorOf(5,0); //false
 */


function isFactorOf(number, factor){
//looping through number, determine if number is less/equal to factor.

  for(var i = number; i <= factor; i++){
 //console.log(number); **I NEED HELP HERE, IT'S ONLY 1/2 WORKING. NOT
 // SURE WHAT IS WRONG**
 //if my statement runs false, then it must return true.
    if(number % 1 === 0){
      return true;
    }
  }
 //have return true outside of forloop to exit once condition is met.
   return false;
}
isFactorOf(6, 2); 
isFactorOf(-6, 2);
isFactorOf(5, 0);


/* isPrime
Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.*/
// isPrime(2); //true
// isPrime(10); //false
// isPrime(15485863); //true
// isPrime(3548563); //false

/*Debug The Program */

// potential answer - longer option:
function isPrime(number){
	//determine if number is 1
  if(number === 1){
    return false;
  }
//0 gives you NaN and all the numbers are divisible by 1.  Therefore, you
//start at 2.
   for(var i = 2; i < number; i++){
     if(number % i === 0){ //if the statement is true, then return false
       return false;
     }
   }
   return true;
}
isPrime(10);

