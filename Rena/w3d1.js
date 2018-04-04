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


function myIndexOf(array, ele){
    for(var i = 0; i < array.length; i++){
        if(array[i] === ele){
            return i;
        }
    }
    return -1;
}
myIndexOf([1,2,3,4,5], 5);
myIndexOf(["a", "b", "c"], "d");
myIndexOf(["a", "b", "c"], "a");



//Alternative answer:
function myIndexOf(array, num){
//Use .findIndex() method to find the index/position.
// Note that 'el' referes to the element in array.
//Need to use a call-back function:
    array.findIndex(function(el){
        return el ==== num;
    })
}
myIndexOf([1,2,3,4,5], 5);

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
    return Math.max(...array) * Math.min(...array);
}
minMaxProduct([5,4,3,2,1]);
minMaxProduct([4,2,5,1,-5]);

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/


//Using while loop to solve this!
function leastCommonMultiple(num1, num2) {
    var leastMultiple = num1 * num2;
    //while loop must be true all the time:
    while(leastMultiple % num1 === 0 && leastMultiple % num2 === 0){
      leastMultiple /= 2;
    }
    //when it's false, it exists the loop:
    return leastMultiple * 2;
  }
  leastCommonMultiple(24, 26);

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

array = [1, 2, 3, 4];

array.map(function(x){
    return x * 10;
})



function hipsterfy(sentence){
    //create new variable and split the string:
    var arraySentence = sentence.split("");
//create new variable and use .map() method:
    var newSentence = arraySentence.map(function(word){

    })
}
hipsterfy("runner anaconda");

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

function magicCiper(sentence, cipher){
    


}
magicCipher("add me on facebook" , { a : "c", d : "q"})


/* NOTES: from Rena

1) For function #myIndexOf(array, ele): DONE.

2) For function `minMaxProduct(array):  Done.

3) For leastCommonMultiple(num1, num2):  DONE.

4) Still working on this!

5) I am not sure what it's asking for. The requirement is confusing, can you explain?
Answer: for the sentence: "add me on facebook" and the object { a : "c", d : "q"}),
you have to replace "a" with "c" and "d" with "q" in the sentence.
*/
