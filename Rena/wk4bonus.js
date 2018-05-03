// Notes:


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
