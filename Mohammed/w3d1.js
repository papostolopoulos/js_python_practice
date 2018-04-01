//------------------------------------//
//            Week 3 Day 1            //
//------------------------------------//

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects).

** DO NOT USE Array.prototype.indexOf

** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/
function myIndexOf(array, ele) {

  if (array.indexOf(ele) === -1){
      return -1
}
      return array.indexOf(ele);
}


/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Example
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){

var min = Math.min(...array);
var max = Math.max(...array);
  return max * min;
}


/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2) {
  for (var i = 1; true; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}


/******************************************************************************
** Write a function `hipsterfy(sentence)` that takes takes a string containing
** several words as input. Remove the last vowel from each word. 'y' is not a vowel.

** Example
** hipsterfy("proper") => "propr"
** hipsterfy("proper tonic panther") => "propr tonc panthr"
** hipsterfy("towel flicker banana") => "towl flickr banan"
** hipsterfy("runner anaconda") => "runnr anacond"
** hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"
*/

function hipsterfy(sentence){
  var arr = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var words = sentence.split('');

  for (var i = 0; i < words.length; i++) {
    for (var j = 0; i < vowels.length; i++)
     if (words[i] === vowels[j]) {
       delete
     }

  }

  var results = arr.join("");
  return results;
}
I gave up :(


/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/


/*Comments from Paris
myIndexOf: DO NOT USE Array.prototype.indexOf - that is what the problem says
Good work finding the solution with indexOf() but you should try another solution too.

leastCommonMultiple: The problem does not ask you to return 'i' but the least common
multiple between two numbers. Can you find online what the least common multiple is
in arithmetic?

minMaxProduct: CORRECT! good job.

hipsterfy:
Try the following:
Create a new function (start fresh)
Do the split like before
After you split, can you console.log the letters of each word backwards?
For example, for the word "panther", can you log r e h t n a p?
Do that and then we can talk again
*/
