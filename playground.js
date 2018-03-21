/* Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel. */
// hipsterfy("proper"); //"propr"
// hipsterfy("proper tonic panther"); //"propr tonc panthr"
// hipsterfy("towel flicker banana"); //"towl flickr banan"
// hipsterfy("runner anaconda"); //"runnr anacond"
// hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"

//ES6
function hipsterfy(sentence){
  return sentence.split(" ").map((el) => el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("")).join(" ");
}


//ES5
function hipsterfy(sentence){
  var sentenceArr = sentence.split(" ");
  var newSentence = sentenceArr.map(function(el) {
    return el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("");
  });
  return newSentence.join(" ");
}


hipsterfy("proper"); //"propr"
hipsterfy("proper tonic panther"); //"propr tonc panthr"
hipsterfy("towel flicker banana"); //"towl flickr banan"
hipsterfy("runner anaconda"); //"runnr anacond"
hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"


var str = "Hello, hello, I think I like you. hello, Hello"

console.log(str.replace(/hello/g, "Goodbye"));
console.log(str.replace(/hello/gi, "Goodbye"));
console.log(str.replace("hello", "Goodbye"));


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

{
  name: "Rena",
  sayHi: function() {

  },
  myPrototype:
}


function Person(name, address){
  this.name = name;
  this.address = address;

}

Person.prototype.sayHi = function() {
  return "Hello, my name is " + this.name + " and I live at " + this.address;
}


Person.prototype.myAddress = function(){
  return "My address is " + this.address;
}

Person.prototype.somethingFunny = function(){
  return this.name + " ate a banana and turned yellow";
}




var rena = new Person("Rena", "111 Main St");
var mohamed = new Person("Mohammed", "200 Market St");
