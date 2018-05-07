// MORE Notes:


/*.map, .filter, .reduce
.map gets an array and returns an array
  .map gets each element of the array and modifies it in a way where the Same
  number of elements return (same array.length) but modified based on the
  callback function
  .map does not save the returned array in the existing variable (array).
  You would need to create a new variable to save the product of the .map method
  if you would need to use it further down your code.

  var arr = [1, 2, 3, 4]
  arr.map(function(el) {
    return el * 2;
  }); // [2, 4, 6, 8]


.filter gets an array and returns an array
  .filter gets the elements and keeps only the ones that meet the condition described
  in the callback functions
  .filter does not save the returned array in the existing variable (array).
  You would need to create a new variable to save the product of the .filter method
  if you would need to use it further down your code.

  arr.filter(function(el) {
    return el % 2 === 0;
  });

.reduce gets an array and returns a single element (ex: one number or one string)
  .reduce gets the elements of the array and "combines" them into a single element.
  For example, it adds all the numbers to a single number.
  arr.reduce(function(start, el) {
    return start += el
  }, 0);
*/


//Example of regular function:
function addTwoFewTimes(num, counter) {
  while (counter > 0) {
    num += 2;
    counter -= 1;
  }
  return num;
}

addTwoFewTimes(1, 5);


//Example of recursive function: It's a type of function
//that is invoking itself.

function addTwoFewTimes(num, counter){
  num += 2;
  counter -= 1;
  if (counter === 0) {
    return num;
  }
  //invoke function (again) within same function
  //declaration.  Adding a new function (each time)
  // ontop of the 'STACK'.
  addTwoFewTimes(num, counter);
}

addTwoFewTimes(1, 5);


//Recursion example:
var userInput = prompt('Enter a valid number:');

function response(input){
	if(isNaN(Number(input))){
		response(input);
	}
	alert('You did it!');
}
response(userInput);

// **********************************************************************************************
//Other BONUS Exercises to Solve:
//1) Using a for loop, log the numbers 0 through 100 to the console.

for(var i = 0; i <=100; i++){
  console.log(i);
}

//2) Using a for loop, log the numbers 1 through 100 to the console (note: NOT INCLUDING ZERO).

for(var i = 1; i <= 100; i++){
  console.log(i);
}

//3) Using a for loop, log only even numbers between 0 and 100 to the console.

for(var i = 0; i <= 100; i++){
  if(i%2 === 0){
    console.log(i);
  }
}

//4) Using a for loop, log only odd numbers between 0 and 100 to the console.

for(var i = 0; i <=100; i++){
  if(i%2 !== 0){
    console.log(i);
  }
}

//5) Using a for loop, log only numbers which are evenly divisible by 5 to the console.

for(var i = 0; i <= 100; i++){
  if(i % 5 === 0){
    console.log(i);
  }
}


//6) Using a for loop, log all the characters of the following: var myString = "hello world!"

var myString = "hello world!";
for(var i = 0; i < myString.length; i++){
  console.log(myString[i]);
}

//7) Using a for loop, log every other character of the following: var myString = "hello world!"

var myString = "hello world!";
for(var i = 0; i < myString.length; i +=2){
  console.log(myString[i]);
}


//8) Using a for loop, log only the vowels in the following: var myString = "hello world!"

var myString = "hello world!";
var vowels = "aeiou";

for(var i = 0; i < myString.length; i++){
  if(vowels.includes(myString[i])){
    console.log(myString[i]);
  }
}


//9) Using a for loop, log only the consonants in the following: var myString = "hello world!"
//STILL CANNOT RESOLVE - Working on it!
var myString = "hello world!";
var vowels = "aeiou";

for(var i = 0; i < myString.length; i++){
  if(myString[i].includes(vowels[i])){
    console.log(myString[i]);
  }
}


//10) Write a function which takes one number as a parameter, and returns (not logs!) double that number.

function timesTwo(num){
  return num * 2;
}
timesTwo(6);

//ES6 verion:
const timesTwo = num => num * 2;
timesTwo(8);

//11) Write a function which takes two numbers as parameters, and returns the sum of these two numbers.

function sumTwo(num, num2){
  return num + num2;
}
sumTwo(2, 8);

//ES6 version:
const sumTwo = (num, num2) => num + num2;
sumTwo(10, 12);


//12) Write a function which takes two numbers as parameters, and checks if one number is evenly divisible by the other. If so, the function returns true. If not, the function returns false.

function checkTwo(num, num2){
  if(num % num2 === 0){
    return true;
  }
  return false;
}
checkTwo(12, 6); //Answer: true
checkTwo(20, 10); //Answer: false

//ES6 version:
const checkTwo = (num, num2) => num % num2 === 0 ? true : false;
checkTwo(12, 6); //Answer: true
checkTwo(20, 10); //Answer: false

//13) Write a function which takes one string as a parameter, and returns the length of that string.

function strLength (string){
  var newStrLength = string.length;
  return newStrLength;
}
strLength("Happy Birthday!");
//Answer: 15

//ES6 version:
const strLength = (string) => string.length;
strLength("Happy Birthday!"); //Answer: 15

//14) Write a function which takes one string as a parameter, and returns the first and last letters of this string.

function strFirstAndLast(string){
  //WHY IS THIS VERSION (using spread operator) NOT WORKING? Is it because
  //I did not turn the string into an Array first?
  //return [...string][0][string.length-1];

  //This version works!
  return "first character: " + string[0] + ", and " + "last character: " + string.charAt(string.length-1)
}
strFirstAndLast('apple seed');

//ES6 version:
const strFirstAndLast = (string) => (`first character: `+ string[0] + `, and ` + `last character: `+ string.charAt(string.length-1))
strFirstAndLast('apple seed');

//15) Write a function which takes one string as a parameter, then uses a for loop to return the number of vowels contained in the string.
//Why does this only return 'a'? I tried to use .split() on var vowels to allow me to compare
//strings.
var vowels = 'aeiou'.split('');

function findVowels(string){
  for(var i = 0; i < string.length; i++){
    if(vowels[i].includes(string[i])){
    }
    return string[i];
  }
}
findVowels("achoo humbug!");


//16) Write a function which takes two numbers as parameters, then uses a for loop to log every number BETWEEN those two numbers to the console.
// I am stuck...do not know what it's really asking me!!
