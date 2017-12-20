
//------------------------------------//
//            Week 1 Day 1            //
//------------------------------------//

/* Numbers
isOdd
Input: A Number.
Output: A Boolean. true if the number is odd, otherwise false*/
function isOdd(n){
  if (n % 2 != 0 ){
    return true;
  }
  else {
    return false;
  }
}

function isOdd(n) {
  if (n % 2 !== 0){
    return true;
  }
  return false;
}

function isOdd(n) {
  return n % 2 !== 0;
}

isOdd(2); // flase
isOdd(5); // true
isOdd(-17); // true


/* plusFive
Input: A Number.
Output: A Number. The sum of the input and 5 */

function plusFive(n) {
  return n + 5;

}

plusFive(0); //5
plusFive(-2); //3
plusFive(21); //26

/* threeOrSeven
Input: A Number.
Output: A Boolean. true if the number is divisible by 3 or 7*/

function threeOrSeven(n) {
  return n % 3 === 0 || n % 7 === 0;

}

threeOrSeven(3); //true
threeOrSeven(42); //true
threeOrSeven(8); //false

/* Order of Operations
Evaluate each expression. Check your answer in the console.
1 + 1 * 5
(1 + 1) * 5
1 + 2 - 5 / 6 - 1
5 * 5 % 13
5/(-1 * (5 - (-10))) */



/* Strings
hello
Input: A String.
Output: A String saying "Hello" to the input value.*/

function hello(string) {
  var greeting = "Hello, "
 return greeting + string
}

//usage of the plus symbol
function hello(str) {
  return "Hello, " + str;
}

//usage of backticks
function hello(str) {
  return `Hello, ${str}`;
}

hello("child"); //"Hello, child."
hello("Anthony"); //"Hello, Anthony."
hello("fsfvf"); //"Hello, fsfvf."

/* yell
Input: A String. Assume no punctuation.
Output: A String. A yelled version of the input.*/

function yell(str) {
  var uppercase = str.toUpperCase();
  return `${uppercase}!!!`;
}

function yell(str) {
  return `${str.toUpperCase()}!!!`;
}

yell("I want to go to the store"); //"I WANT TO GO TO THE STORE!!!"
yell("Time to program"); //"TIME TO PROGRAM!!!"


/* whisper
Input: A String. Assume no punctuation.
Output: A String. A whispered version of the input.

> whisper("Hey Anthony")
"...hey anthony..."
> whisper("YEA! that was fun")
"...yea! that was fun..." */


whisper("Hey Anthony"); //"...hey anthony..."
whisper("YEA! that was fun"); //"...yea! that was fun..."

/* isSubstring
Input
1) A String, called searchString.
2) A String, called subString.
Output: A Boolean. true is the subString is apart of the searchString.
> isSubstring("The cat went to the store", "he cat went")
true

> isSubstring("Time to program", "time")
true
> isSubstring("Jump for joy", "joys")
false */

isSubstring("Time to program", "time"); //true
isSubstring("Jump for joy", "joys"); //false


/* echo
Input: A String.
Output: A String. The input string string echo-ized.

> echo("Mom!")
"MOM! ... Mom! ... mom!"
> echo("hey")
"HEY ... hey ... hey"
> echo("JUMp")
"JUMP ... JUMp ... jump" */



/* Boolean
isEven
Input: A Number.
Output: A Boolean. true if the number is even, otherwise false
Condition: Must be written in terms of isOdd

> isEven(2)
true
> isEven(5)
false */



isEven(2); //true
isEven(5); //false

// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false



isEven(2) //=> true
isEven(5) //=> false
isEven(-55) //=> false
