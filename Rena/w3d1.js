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
            return array.findIndex(ele);
        }
    }
}
myIndexOf([1,2,3,4,5], 5);
myIndexOf(["a", "b", "c"], "d");
myIndexOf(["a", "b", "c"], "a");


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
    return Math.max(...array) + Math.min(...array);
}
minMaxProduct([5,4,3,2,1]);

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function lcm(num1, num2){
    var newSum = num1 * num2;
   //  console.log(sumNum);
     //Using Math.min() returns the lowest number:
       if(newSum % num1 !== 0 && newSum % num2 !== 0){
         // console.log(Math.min(num1, num2));
         return Math.min(newSum);
       }
     }
     lcm(24, 26);
     leastCommonMultiple(2, 3);

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

//I think we did this one before.  Is this a duplicate?


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

1) For function #myIndexOf(array, ele): I understand that I cannot use indexOf() method.  However, I found
findIndex() method instead. I think my forloop and if-statement are correct, but my return statement using
findIndex() seems off??  I read the description of findIndex(), but it's stating 'ele' is not a function (type-error).
Asnwer: If you are going to use findIndex, this does not need a for loop or an if statement.
It needs a callback function. Can you figure it out? Play with findIndex separately and see what you get.
See if you can add it later to the function you are building.

2) For function `minMaxProduct(array):  I think I am reading the requirement correctly?? - it's wants the
product of .max and .min of array.  My answers do not match examples.
Answer: Product, not sum. See online what "product" stands for

3) For leastCommonMultiple(num1, num2):  I used Math.min() method to find lowest after my forloop.
Answer: this is the same problem like the lcm one.

4) I think this is a duplicate, correct?
-Correct but you need to work on it from scratch. See if you can solve it

5) I am not sure what it's asking for. The requirement is confusing, can you explain?
Answer: for the sentence: "add me on facebook" and the object { a : "c", d : "q"}),
you have to replace "a" with "c" and "d" with "q" in the sentence.
*/
