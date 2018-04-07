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
        return el === num;
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


function hipsterfy(sentence){
    //create new variable and split the string:
    var arraySentence = sentence.split(" ");
//create new variable and use .map() method:
    var newSentence = arraySentence.map(function(word){
        //console.log(word)
        //console.log(word.length);

        var vowels = 'aeiou';
    //reverse forloop: 
        for(var i = word.length - 1; i >= 0; i--){
            //console.log(vowels.indexOf(word[i]));
            if(vowels.indexOf(word[i]) !== -1){
                //console.log("in the if for " + i + " " + word[i])
                //.replace() method starts from beginning:
                // 1. if you have a RegEx with global, /someregex/g then
                //     it will look and replace everything
                // 2. if you have a RegEx with global and i /someregex/gi then 
                // it will replace everything regardless of capitalization
                // 3. if you have a plain regex /someregex/ or a plain text string "someString", 
                // then it will replace it only once
                return word.split("").reverse().join("").replace(word[i], "").split("").reverse().join("");
            }
        }
        // return word;
    })
    return newSentence.join(' ');
}
hipsterfy("runner anaconda");



//Alternative option:
function hipsterfy(sentence){
    //create new variable and split the string:
    var arraySentence = sentence.split(" ");
//create new variable and use .map() method:
    var newSentence = arraySentence.map(function(word){
        //console.log(word)
        //console.log(word.length);

        var vowels = 'aeiou';
    //reverse forloop: 
        for(var i = word.length - 1; i >= 0; i--){
            //console.log(vowels.indexOf(word[i]));
    //use .indexOf() method returns the position of the first 
    //occurrence of a specified value in a string. Otherwise, it
    //returns -1 if value is not found.
            if(vowels.indexOf(word[i]) !== -1){
            // using 'i + 1', means you are 
            //starting from the current index position plus 1.
                return word.substr(0, i) + word.substr(i + 1);
            }
        }
        // return word;
    })
    return newSentence.join(' ');
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

function magicCipher(sentence, cipher){

    for(var i = 0; i < sentence.length; i++){
       // console.log(sentence[i]);
        if(Object.keys(cipher).indexOf(sentence[i]) !== -1){
            //sentence[i] represents the elements in string. Use the .replace()
            //method to have cipher[sentence[i]] replace the elements. The
            //cipher[sentence[i]] represents the elements in cipher object.
            sentence = sentence.replace(sentence[i], cipher[sentence[i]]);
        }
    }
    return sentence;
}
magicCipher("add me on facebook", { a : "c", d : "q"});


//Alternative in ES6 version:

let magicCipher = (sentence, cipher) => {
    return sentence.split('').map(x => (cipher[x] ? cipher[x]: x)).join('');
}
magicCipher("add me on facebook", { a : "c", d : "q"});




/* NOTES: from Rena

1) For function #myIndexOf(array, ele): DONE.

2) For function `minMaxProduct(array):  Done.

3) For leastCommonMultiple(num1, num2):  DONE.

4) For function hipsterfy(sentence):  DONE

5) DONE

Paris' Answer: for the sentence: "add me on facebook" and the object { a : "c", d : "q"}),
you have to replace "a" with "c" and "d" with "q" in the sentence.
*/
