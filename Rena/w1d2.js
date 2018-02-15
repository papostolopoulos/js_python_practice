
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
    var num = "";
    for(var i = lowNum; i <= highNum; i++){
    //iterate through loop and separate number by comma.
    var numstr = num += i + ',';
    // console.log(numstr);
    }
//have return numstr outside of forloop to produce every number in between
//lowNum and highNum
   return numstr.slice(0, -1);
}

logBetween(4, 6);
logBetween(10, 22);



// //alternative answer: Using While-Loop

// function logBetween(lowNum, highNum) {
//   while(lowNum <= highNum){
//     console.log(lowNum);
//     lowNum++;
//   }
// }
// logBetween(10, 22);



/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints to the console every number
from 0 to max that is divisible by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18 */

// //This code block prints out all the numbers:
// function fizzBuzz(max){
//   var numBuzz = "";
// //looping through numbers
//   for(var i = 0; i <= max; i++){
//     // console.log(fizzBuzz);
//     if(max % 3 === 0 || max % 5 === 0){
// //print answer and separate numbers by comma
//       var numbers = numBuzz += i + ',';
//     }
// //use slice() to remove last element:
//     console.log(numbers.slice(0, -1));
//   }
// }
// fizzBuzz(20);



//This is correct answer:
function fizzBuzz(max){
//looping through numbers
  for(var i = 1; i <= max; i++){
    // console.log(i);
//identify i that is % by 3 OR % by 5
      if(i % 3 === 0 || i % 5 === 0){
//identify i that is % by 3 AND % by 5:
        if(i % 3 === 0 && i % 5 === 0){
//anything after continue; does not execute.
           continue;
      }
    console.log(i);
    }
  }
}
fizzBuzz(20);

/*Bonus challenge
Can you replicate the same function but this time try to put everything
that you want to keep in an array and 
then print out the numbers
of the array (not the array itself but the numbers in it)
*/

function fizzBuzz(num){
  var newArr = [];

  for(var i = 1; i <= num; i++){
    if(i % 3 === 0 || i % 5 === 0){
      if(i % 3 === 0 && i % 5 === 0){
        continue;
      }
//use .push() method to push numbers into newArr variable.
      newArr.push(i);
    }   
  }
//loop thru newArr and then print out numbers:
    for(var i = 0; i < newArr.length; i++){
      console.log(newArr(i));
    } 
}
fizzBuzz(20);




/* isFactorOf

Define a function isFactorOf(number, factor) that returns true if factor is a factor of number. Otherwise, false.

isFactorOf(6,2); //true
isFactorOf(-6, 2); //true
isFactorOf(5,0); //false
 */

function isFactorOf(number, factor){
    // console.log(number);
 //if my statement runs, then it must return true.
    if(number % factor === 0){
      return true;
    }
 //have return false outside to exit once condition is met.
   return false;
}
isFactorOf(6, 2);
isFactorOf(-6, 2);
isFactorOf(5, 0);
isFactorOf(10, 5);



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



/*Comments from Paris
- TypeError and all errors: Please try to understand what the errors mean in order to be able to debug them
- MDN is a good resource to get answers to questions and educate yourself. Try to use it more often
- Go over the problem description more carefully and on several occasions to make sure you are doing the right thing
- If there is an if statement that executes too many of too few times, see if your statement (what you have in the parenthesis)
is accurate for your measurement
- Try from small pieces of code and make sure they are working. Then start expanding your code.
- When you are using operators, make sure you split them to see what the result of the operators is and then gradually join them
*/
