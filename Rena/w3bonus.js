// NOTES:
//What is the Least Common Multiple?
// If you have ever found a common denominator for two or more fractions, you have found a common multiple. 
//For example, if you want to add 3/8 and 5/12, you must find a common denominator. A common denominator, 
//which is another name for common multiple, is a number that is a multiple for all the numbers being considered. 
//For example, a common multiple for 8 and 12 is 24. This means that there is an integer times 8 that will make
// 24 and there is an integer times 12 that will make 24. Going through the 8 time tables, 8 x 3 = 24 and going 
//through the 12 time tables, 12 x 2 = 24.

// These are not the only common multiples for 8 and 12, however. There are countless more. For example, 72 
//is another common multiple because 8 x 9 = 72 and 12 x 6 = 72. The number 24, however, is special because it 
//is the smallest or lowest or least common multiple for 8 and 12. The number 24 is called the least common
// multiple, abbreviated LCM, for 8 and 12.

// Listing Multiples
// The simplest method to find an LCM is to simply list the multiples from the time tables. For example, to find 
//the LCM for 6, 4, and 3 I could list the multiples for all three numbers until I see the same number in all three lists.

// Multiples of 6: 6, 12, 18, 24, 30

// Multiples of 4: 4, 8, 12, 16, 20, 24

// Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24

// For the multiples listed, there are two numbers that occur in both lists: 12 and 24. To find the LCM, pick the 
//smallest number. The LCM must be 12.


function lcm(num1, num2) {
  var leastMultiple = num1 * num2;
  while(leastMultiple % num1 === 0 && leastMultiple % num2 === 0){
    leastMultiple /= 2;
  }
  return leastMultiple * 2;
}



//Another example of Reverse for loop, plus .substring() method:
var vowels = 'aeiou';
var name = 'Paris';
var result = name;

for (var j = name.length -1; j >= 0; j--){
	for (var i = 0; i < vowels.length; i ++){
		if(vowels[i] === name[j]){
			result = name.substring(0, j) + name.substring(j + 1);
			console.log("Result: ", result);
			break;
		}
	}
	if (result !== name) {
		console.log("inside second if statement", result, name)
		break;
	}
}

//ES6 version of removing vowels: using functional programming
function removeLetters(word, letters){
	return word.split('').filter(x =>!(letters.includes(x))).join("");
}
removeLetters('alphabets', 'aeiou');



//ES6 veriosn of removing 1st vowel found in string:
function removeFirst(word, letters = 'aeiou'){
	const wordArray = word.split("");
	return wordArray.splice(wordArray.findIndex(x => letters.includes(x)), 1).join("");
}
removeFirst('Paris');


//Notes: Reverse For-Loop info from Stack Overflow
// It's not that i-- is faster than i++. Actually, they're both equally fast.

// What takes time in ascending loops is evaluating, for each i, the size of your array. In this loop:

// for(var i = array.length; i--;)
// You evaluate .length only once, when you declare i, whereas for this loop

// for(var i = 1; i <= array.length; i++)
// you evaluate .length each time you increment i, when you check if i <= array.length.

// In most cases you shouldn't even worry about this kind of optimization.


//Example of how to use .map():
array = [1, 2, 3, 4];

array.map(function(x){
    return x * 10;
})


//Examples of callback functions:
//What is a call-back?  A function that can be called/invoked 
//inside another function.

function lookFine(){
	return "You are looking fine today.";
}

function lookBad(){
	return "You are looking bad today.";
}


function lookLike(name, cb){
	//cb() to invoke the callback function itself:
	return "Hello" + name + ', ' + cb();
}

lookLike("Paris", lookFine);
lookLike("Paris", lookBad);


//Ternary Operator: Examples

function writeSomthing(num){
	if(num > 5 && num < 10){
		return ("I am Mohamed.");
	}
	else if(num === 10){
		return ("I am Rena.");
		}
		else{
			return ("I am Paris.");
		}	
	}
}



//This is a Ternary Operator: an expression instead of a statement.
//expressions always returns values; it's a true or false statement
//that always results to a value.
function writeSomething(num){
			//if           			//then        	//else if 		//then		//else
var result = num > 5 && num < 10 ? "I am Mohamed.": num === 10 ? "I am Rena.":"I am Paris."

return result;
}
writeSomething(10);


//EXAMPLES:
//Closure: it's a function being defined inside another function. The
//function returns another function.  You must store the value returned
//from closure so you can invoke it. The returned value cannot be accessed
//any other way except thru the closure.


var j = 1;
function add(){
	let i = 0;
	return (function(){i++; j++; console.log(i, j)});
}

let myClosure = add();
myClosure();


//EXAMPLES:
function jQuery(){
//_user and _pasword are empty let statements:
	let _user, _password;

//user and password are parameters:
	function _login(user, password){
		_user = user;
		_password = password;

		//can do the rest of login work here...
	}
	const publicAPI = {login: _login}
	return publicAPI;
}
jQuery();

//EXAMPLES:
//Recursion is self-similarity, when a subproblem looks like 
//the whole problem. If you don't want to use a for-loop, then
//you can use recursion as replacement. The value is not stored
//in a variable anywhere.

function fact(n){
	//goes down the chain until it reaches the condition, 
	//and then goes back up the chain.
	return (n === 1) ? 1 : n * fact(n-1);
}
fact(6);



//Using .reduce(): EXAMPLE
const square = x => x*x;

const myMapp = (arr, fn) => arr.reduce((prev, curr) => {prev.push(fn(curr)); return prev},[]);

myMapp([1, 2, 3], square);


// This is an interpretation of map without using .map() method. 

//The reduce() method applies a function against an 
//accumulator and each element in the array (from left to right) to reduce 
//it to a single value. The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns 
//a new array.

const square = x => x*x;

const myMap = (arr, fn) => arr.reduce((prev, curr) => prev.concat(fn(curr)),[]);
//square is being passed as parameter = fn.
myMap([1, 2, 3], square);


//This is an interpretation of filter without using .filter() method.
//predicate represents true or false.
const myFilter = (arr, predicate) => arr.reduce((prev, curr) => {
	if (predicate(curr)) prev.push(curr);
	return prev;
},[]);

myFilter([1, 2, 3, 4], (x => ((x % 2) === 0)));


// Using && symbol:
const myEvery = (arr, predicate) => arr.reduce((prev, curr) => prev && predicate(curr), true);

myEvery([2, 3, 4, 5], x => x < 1);
myEvery([2, 3, 4, 5], x => x > 2);



// This is an interpretation of includes without using .includes() method. Incorporating
//the OR symbol:
const myIncludes = (arr, val) => arr.reduce((prev, curr) => prev || (val === curr), false);

myIncludes([1, 3, "Amy"], 3); //true
myIncludes([1, 3, "Amy"], "Beth"); //false


// This is an interpretation of 'does not apply' or none:
const doesApply = (arr, predicate) => arr.reduce((prev, curr) => prev || predicate(curr), false);

let doesNotApply = !(doesApply);

doesApply([1], x => (x < 1));
doesApply([1], x => (x > 0));


//Examples of recursion: It's considered the functional programmer's 'for-loop' or
// some cases, the program will only use recursion.

//Fibonocci sequence: the sum of the two numbers before it.
function fib(num){
//the base case is 0 and 1:
	if(num === 0) return 0;
	if(num === 1) return 1;
	return fib(num - 1) + fib(num - 2);
}
fib(8);




