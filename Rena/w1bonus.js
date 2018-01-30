//------------------------------------//
//            Week 1 Bonus            //
//------------------------------------//

/*dynamicFizzBuzz

1. Define a function dynamicFizzBuzz(max, num1, num2) 
2. that takes three numbers as arguments 
3. and prints to the console every number from 0 to max
4. that is divisible by either num1 or num2, but not both. */


function dynamicFizzBuzz(max, num1, num2){
  // console.log(max, num1, num2);
  for(var i = 0; i <= max; i++){
    // console.log(i);
//Need to re-evaluate my if-statement?
      if(i / num1 === 0 || max / num2 === 0 ){
      }
      console.log(num);
    }
}
dynamicFizzBuzz(30, 2, 6);




//--------------------------------------
/* What will this program evaluate to?*/

var rickyBobbyJr = function(num) {
  if(num < -5) {
    return "Bobby";
  } else if(num < 5) {
    return "Ricky";
  } else {
    return "Junior";
  }
};

rickyBobbyJr(10);
rickyBobbyJr(-8);
rickyBobbyJr(0);

/*Answer:

//Need to invoke rickyBobbyJr() to run the function:

Depending on the parameter that is passed, the result will
be "Bobby" or "Ricky" or "Junior" - BUT not all three names.

If I pass a parameter LESS than -5, then I will get "Bobby". If
it's LESS than 5, then I will get "Ricky".  For everything else,
I will get "Junior".


*/


var makeNum = function(num) {
  return (num * 2) - (num * num);
};

var sayHi = function(n) {
  var x = makeNum(n);
  return "Hey now, " + rickyBobbyJr(x);
}

sayHi(3);
/*Answer:






*/

/*minMaxDifference

Write a function minMaxDifference(array) that return the difference between
the largest value and the smallest value in the array.
Assume array is an array of numbers. */

function minMaxDifference(array) {

}

minMaxDifference([22,23,43,33,2,3,7,5,4,9,8,1,12,45,32,65,41,43]);












/* dogsAndBones

You have 100 dogs (soo many dogs!).
You have arranged all your dogs in a line.
Initially, none of your dogs have any bones.
You take 100 rounds walking around the dogs, always starting at the beginning.
Every time you stop at a dog, you put a bone in it's mouth if it doesn't have one,
and you take away a bone if it has one on (so cruel).
The first round, you stop at every dog.
The second round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.).
The third round, you only stop at every 3rd dog (#3, #6, #9, #12, etc.).
You continue this process until the 100th round (i.e. you only visit the 100th dog).

Write a program dogsAndBones() that prints which dogs have bones at the end. */
