//------------------------------------//
//            Week 1 Bonus            //
//------------------------------------//

/*dynamicFizzBuzz

Define a function dynamicFizzBuzz(max, num1, num2) that
takes three numbers as arguments and prints to the console
every number from 0 to max
that is divisible by either num1 or num2, but not both. */

function dynamicFizzBuzz(max, num1, num2) {
  var i = 0

  while (i < max) {
    if(i % num1 === 0 || i % num2 === 0) {
      if (i % num1 !== 0 && i % num2 !== 0) {
        }
          console.log(i);
      }
      i++;
  }
}

/* dynamicFizzBuzz(10, 3, 5)


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
/*Answer: by making rickyBobbyJr(5) for example

it will return Junior as output, this is what happens:
the argument value 5 is actually the output of ( function(num))
so 5 will go and replace num since num is bigger than -5 it will skip
to the next else condition it evaluate else statment but then it skips
again because 5 is not smaller than 5 so end result is junior.

I have question to paris:
what is data type of rickyBobbyJr is this ? is this type of stucture Object?





*/


var makeNum = function(num) { // function(5)
  return (num * 2) - (num * num); // (5*2)-(5*5) =-15
};

var sayHi = function(n) {
  var x = makeNum(n);
  return "Hey now, " + rickyBobbyJr(x);
}

sayHi(3);
/*Answer:
it will retrun " Hey now, Bobby"

I sat makeNum(5) that gave me a retrun of -15 :)

Question to Paris whats the different if I just do
var makeNum = num vs. makeNum = function(num) ?


*/

/*minMaxDifference

Write a function minMaxDifference(array) that return the difference between
the largest value and the smallest value in the array.
Assume array is an array of numbers. */

function minMaxDifference(array) {
var max1 = Math.max([array]);
var min1 = Math.min([array]);
var results = max1 - min1;
return results;
}

minMaxDifference([22,23,43,33,2,3,7,5,4,9,8,1,12,45,32,65,41,43]);
/* I am getting the wrong Answer:
if I add [] to word array the return results is NaN,
if I remove [] I get Zero for the results,
if I do array.max() I get max undefined \]
'[\]


]'
*/
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



/*
Question for Paris
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
/*
