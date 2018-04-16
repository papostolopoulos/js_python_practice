function addSomething(num1){
  console.log("num1 is", num1);
  return function(num2){
    console.log("num2 is", num2);
    return num1 + num2;
  }
}

var addMe = addSomething(10);

function sayHi(name) {
  return "Hello there " + name;
}

function closures(num3) {
  console.log("num3 is", num3);
  return num3;
}


function addSomethingGood(){
  var num1 = 10;
  console.log("num1 is", num1);
  return function(num2){
    console.log("num2 is", num2);
    return num1 + num2;
  }
}


//loops vs recursion
function addTwoFewTimes(num, counter) {
  while (counter > 0) {
    num += 2;
    counter -= 1;
  }
  return num;
}


function addTwoFewTimes(num, counter){
  num += 2;
  counter -= 1;
  if (counter === 0) {
    return num;
  }
  addTwoFewTimes(num, counter);
}



// myIndexOf

function myIndexOf(array, ele){
    for(var i = 0; i < array.length; i++){
      return array.findIndex(function (el) {
        return el === ele;
      });
    }
}
myIndexOf([1,2,3,4,5], 5);





/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs.

>lcm(2, 3)
6
>lcm(6, 10)
30
>lcm(24, 26)
312 */

function lcm(num1, num2) {
  if ((num1 === 2 || num2 === 2) || (num1 === 1 || num2 === 1)) return num1 * num2;

  if (num1 % 2 === 0) return (num1 / 2) * num2;

  if (num2 % 2 === 0) return (num2 / 2) * num1;

  if (num1 % 2 !== 0 && num2 % 2 !== 0) return num1 * num2;
}


function lcm(num1, num2) {
  var leastMultiple = num1 * num2;
  while(leastMultiple % num1 === 0 && leastMultiple % num2 === 0){
    leastMultiple /= 2;
  }
  return leastMultiple * 2;
}



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


//Other possible solution:

function hipsterfy(sentence){

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var sentArr = sentence.split(' ');
//iterate through the array:
  for(var i = 0; i < sentArr.length; i++){
    var word = sentArr[i];
    // console.log(word);
  //iterate through the element itself:
  // for(var j = 0; j < word.length; j++)

  //reverse forloop, start from the back of string:
  // j >=0, you want to get to index 0 by iterating
  //from largest index position to lowest.
    for(var j = word.length - 1; j >= 0; j--){
        // console.log(word[j]);
        if(vowels.indexOf(word[j]) !== -1){
            // console.log(word[j]);
            // word.replace(word.substring(j, j+1), "");
            sentArr[i] = word.slice(0, j) + word.slice(j+1);
            console.log(word);
            break;
        }
    }

  }
 return sentArr.join(' ');
}
hipsterfy("turtle cheeseburger fries");
hipsterfy("runner anaconda");






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
