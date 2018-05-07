//------------------------------------//
//            Week 3 Day 5            //
//------------------------------------//

/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/

function myForEach(arr, cb){


}

/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/


/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:
1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray
2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"
!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel
Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay
> inPigLatin("let us Dance")
etlay usyay Anceday
> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/

//ES5 version:
function inPigLatin(sentence) {
  var wordsArr = sentence.split(" ");

  for (var j = 0; j < wordsArr.length; j++) {
    var word = wordsArr[j];
    // console.log("Iteration we are going through:", j);
    // console.log("wordsArr[j] (word):", word);

    for (var i = 0; i < word.length; i++) {
      //CHECK IF THE FIRST LETTER IS A VOWELN AND PUT YAY AT END
      if ("aeiou".indexOf(word[0].toLowerCase()) !== -1) {
        wordsArr[j] = word + "yay";
        break;
      }

      // FIND THE VOWEL INSIDE THE WORD AND SLICE THERE. PUT 'AY; AT THE END
      // THE FIRST LETTER IS NOT AN UPPERCASE
      if ("aeiou".includes(word[i])) {
        if (word[0] !== word[0].toLowerCase()) {
          //THE FIRST LETTER IS AN UPPERCASE
          //I need to make the first letter an upperCase after
          //I move letters arround
          wordsArr[j] = word.slice(i, i+1).toUpperCase() + word.slice(i+1) + word.slice(0, i).toLowerCase() + "ay";
          break;
        }
        else {
          wordsArr[j] = word.slice(i) + word.slice(0, i) + "ay";
          // console.log("wordsArr[j] is", wordsArr[j]);
          // console.log("word is", word);
          break;
        }
      }

    }

  }
  console.log(wordsArr.join(" "));
  return wordsArr.join(" ");
}

// inPigLatin("chapter pig Apple"); // --> apterchay igpay
inPigLatin("Shmanthony is the best teacher")



//ES6 version: using RegEx.

//finds one or more vowels followed by 0 or more letters. It grabs the whole word.
const regOne = /\b([aeiou]+\w*)\b/;

//finds one or more consenants, followed by one or more words:
const regTwo = /\b([^aeiou])+(\w+)\b/;

const inPigLatin = (sentence) => sentence.split(' ').map(
                    word => 'aeiou'.includes(word[0]) 
                    ? word.replace(regOne, '$1ay') 
                    : word.replace(regTwo, '$2$1ay')).join(' ');

inPigLatin('Hello World');


//ES6: shorter version: 
//In RegEx, note that 'i' is a modifier (modifies the search to be case-insensitive).
// In this code version, the ternary was removed and only used one RegEx.

const inPigLatin = sent => sent.split(" ").map(word => word.replace(/\b([^aeiou]*)(\w+)\b/i, "$2$1ay")).join(" ");
//console.log(inPigLatin("Hello world!"))
inPigLatin("chapter pig Apple");