
//this is a special key word. It depends entirely on HOW
//the function is being called. There are main conditions:

// Default Binding: this equals global object (not using strict mode):
//a) implicit
//b) explicit
//c) new


function Person(name, address) {
  this.name = name || "No entry";
  this.address = address || "No entry";
  this.sayHi = function(){
    return "Hello, I'm " + this.name;
  };
}


var mo = new Person("Mohammed", "999 Second Av");
var rena = new Person("Rena", "111 Main St");
var paris = new Person();




//EXAMPLES of Array Methods:Map, Filter, Join and Reduce: produce ES5 and ES6 versions
//Use the provided arrays for exercises:
const arr1 = [0, 6, 2, 0, -2, 7];
const arr2 = ['I', 'wish', 'I', 'was', 'concatenated.'];

//.map() applies the function to each element of the array.
//.map() Returns an array of results.
console.log(arr1.map(num => num * num)); // square the value.


//An array of the first letter of each word in array2 using .map.
//takes something and returns first letter.
console.log(arr2.map(word => word[0]));

//takes the second element of nested arrays: 
console.log([[1, 4, 6], ['a', 5, true], [false, 1, 8]].map(x => x[1]));

//using .map(), the function is being passed x. x represents nested arrays.
//references the array[array length -1], will produce last element in the array.
console.log([[1, 4, 6, true], ['a', 5, true, 12], [false, 1, 8]].map(x => x[x.length-1]));


// Another example of using .map() method: RETURNS an Array.
var arr = [1, 2, 3];
arr.map(function (el) {
  return el * 5;
});

//Example of using .forEach() method: DOES NOT RETURN AN ARRAY. 
// Using .forEach() method: Does not return an Array. You must
// specify the type of result you want (i.e. string, array, object, etc.)
// Currently, the result will give you undefined.
var arr = [1, 2, 3];
arr.forEach(function (el) {
  return el * 5;
});


const lastEl = (arr) => arr[arr.length - 1]; //gets the last element in the array.
const firstEl = (arr) => arr[0]; //gets the first element.
const secondEl = (arr) => arr[1]; // gets the second element.
const secondLastEl = (arr) => arr[arr.length - 2] // gets second to last element.

//using .map() method, you are passing a callback function lastEl, to return
//the arr[arr.length -1], so you can get last element.
function lastEl(arr){
	return arr[arr.length-1];
}
console.log([[1, 4, 6, true], ['a', 5, true, 12], [false, 1, 8]].map(lastEl));



//.filter() method keeps the element that you want in the array.
//.fitler() evaluates based on true/false.
console.log(arr1.filter(num => (num >= 0))); //returns only positive number


//use .join() method to concatenate an array.
console.log(arr2.join(" "));


//.reduce() method reduces the array to single value.
//implicitly looping thru array.
//the function takes previous(p) and current value(c), then
//takes previous plus space plus current value, then turns
//it into a string.
console.log(arr2.reduce((p,c) => (p + ' ' + c), ''));


//takes an array and then creates an object with key/value pairs.
const arr3 = ['w', 'i', 's', 'h'];
//Using .reduce()method, take the array, which has the previous element,
//current element and index. 
console.log(arr3.reduce((p, c, i) => {
//The function turns the previous element into
//a string, which is then equal to the current element.
	p[i.toString()] = c;
//then return the previous element.
	return p;
//you want to turn the string into a new empty object.
},{}));





