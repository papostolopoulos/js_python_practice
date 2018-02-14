//------------------------------------//
//            Week 1 Bonus            //
//------------------------------------//

/*dynamicFizzBuzz

// 1. Define a function dynamicFizzBuzz(max, num1, num2)
// 2. that takes three numbers as arguments
// 3. and prints to the console every number from 0 to max
// 4. that is divisible by either num1 or num2, but not both. */
//


function dynamicFizzBuzz(max, num1, num2){
  // console.log(max, num1, num2);
  for(var i = 0; i <= max; i++){
      if(i % num1 === 0 || i % num2 === 0){
          if(i % num1 === 0 && i % num2 === 0){
//The continue statement breaks one iteration (in the loop), if a
//specified condition occurs, and continues with the next iteration
// in the loop.
            continue;
        }
          console.log(i);
      }
    }
}
dynamicFizzBuzz(30, 2, 6);



//alternative answer using while-loop:

function dynamicFizzBuzz(max, num1, num2){
//use -1 to then start at 0.
  var i = -1;

  while(i <= max){
// have the iterator at top so it does not
//turn into an infinite loop.
    i++;

    if(i % num1 === 0 || i % num2 === 0){
      if(i % num1 === 0 && i % num2 === 0){
        continue;
      }
      console.log(i);
    }
  }
}
dynamicFizzBuzz(10, 3, 5);



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

//Example of using rickyBobbyJr() from previous exercise.

// var sayHi = function(n) {
//   console.log("This is n:", n);
// var x = makeNum(n);
// console.log("This is x:", x);
// return "Hey now, " + rickyBobbyJr(x);
// }
//sayHi(7);


/*Answer:


*/

/*minMaxDifference

1) Write a function minMaxDifference(array)
2) that return the difference
between the largest value and the smallest value in the array.
3) Assume array is an array of numbers. */

function minMaxDifference(array){

  var max = Math.max(...array);
  // console.log(max);
  var min = Math.min(...array);
  // console.log(min);

  return max - min;
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


//ES5 version: study typeOf and isArray

function dogsAndBones(num){
  var wBones = [];

  for(var i = 1; i <= num; i++){
    wBones.push(i);
  }

  for(var j = 1; j < wBones.length; j++){
    for(var k = j; k < wBones.length; k+= j+1){
       // console.log(wBones[k]);

       if(typeof wBones[k] === 'number'){
          wBones[k] = 'wo';
       }
       else{
        wBones[k] = k + 1;
       }
    }
  }
  return wBones.filter(function(el){
    return el !== 'wo';
  });
}
dogsAndBones(100);


/*Feedback from Rena
I removed num.length because I cannot take a length of a number. When I run the code, it only
answers "Give the dog a bone".
*/
