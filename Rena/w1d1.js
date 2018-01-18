//------------------------------------//
//            Week 1 Day 1            //
//------------------------------------//

/* Numbers
isOdd
Input: A Number.
Output: A Boolean. true if the number is odd, otherwise false*/


// isOdd(2);
// isOdd(5);
// isOdd(-17);

//using num % 2 ===0 and num % 2 !==0, is consider a "catch-all"
//method for integers and floats.
function isOdd(num){
  if(num % 2 === 0){
    return false;
  }

  else (num % 2 !== 0) 
    return true;
};

isOdd(2); //false 
isOdd(5); //true
isOdd(-17); //true
isOdd(10.01); //true


/* plusFive
Input: A Number.
Output: A Number. The sum of the input and 5.*/


// plusFive(0); //5
// plusFive(-2); //3
// plusFive(21); //26


function plusFive(num){
  return num + 5;
}

plusFive(0); //5
plusFive(21); //26


/* threeOrSeven
Input: A Number.
Output: A Boolean. true if the number is divisible by 3 or 7*/


// threeOrSeven(3); //true
// threeOrSeven(42); //true
// threeOrSeven(8); //false


function threeOrSeven(num){
  if(num % 3 === 0 || num % 7 === 0){
    return true;
  }
  else{
    return false;
  }
};

threeOrSeven(3);
threeOrSeven(42);
threeOrSeven(8);

/* Order of Operations
Evaluate each expression. Check your answer in the console.
1 + 1 * 5
(1 + 1) * 5
1 + 2 - 5 / 6 - 1
5 * 5 % 13
5/(-1 * (5 - (-10))) */

//This is complete and I checked in console area:
1 + 1 * 5 // answer: 10
(1 + 1) * 5 // answer: 10
1 + 2 - 5 / 6 - 1 // answer: 1.16666
5 * 5 % 13 // answer: 12
5/(-1 * (5 - (-10))) // answer: -0.33333



/* Strings
hello
Input: A String.
Output: A String saying "Hello" to the input value.*/


hello("child"); //"Hello, child."
hello("Anthony"); //"Hello, Anthony."
hello("fsfvf"); //"Hello, fsfvf."

function hello(word){
  return "Hello, " + word + ".";
}

hello("Anthony");
hello("child");

/* yell
Input: A String. Assume no punctuation.
Output: A String. A yelled version of the input.*/


yell("I want to go to the store"); //"I WANT TO GO TO THE STORE!!!"
yell("Time to program"); //"TIME TO PROGRAM!!!"


function yell(str){
  return str.toUpperCase() + "!!!";
}

yell("Time to program");
yell("I want to go to the store");

/* whisper
Input: A String. Assume no punctuation.
Output: A String. A whispered version of the input.

> whisper("Hey Anthony")
"...hey anthony..."
> whisper("YEA! that was fun")
"...yea! that was fun..." */


whisper("Hey Anthony"); //"...hey anthony..."
whisper("YEA! that was fun"); //"...yea! that was fun..."

function whisper(str){
  return "..." + str.toLowerCase() + "..."
}

whisper("YEA! that was fun");
whisper("Hey Anthony");

/* isSubstring
Input
1) A String, called searchString.
2) A String, called subString.
Output: A Boolean. true is the subString is apart of the searchString.
> isSubstring("The cat went to the store", "he cat went")
true

> isSubstring("Time to program", "time")
true
> isSubstring("Jump for joy", "joys")
false */

// isSubstring("Time to program", "time"); //true
// isSubstring("Jump for joy", "joys"); //false


//answer - the LONG WAY:  Just keep for reference only.

// function isSubstring(searchString, subString){
//   for(var i = 0; i < searchString.length; i++){
//     // 'i' is defined start and subString.length is the 'length' | str.substr(start[, length])
//     var sentence = searchString.substr(i, subString.length);
//     if(sentence === subString){
//       return true;
//     }
//   }
// //have the return outside the forloop and if answer is false, the code will exit at this stage.
//   return false;
// }


function isSubstring(searchString, subString){
  for(var i = 0; i < searchString.length; i++){
    // console.log("We are in the for loop for i =", i);
    var sentence = searchString.substr(i, subString.length);
    if(sentence === subString){
      // console.log("In the if statement")
      return true;
    }
  }
  // console.log("outside the for loop");
  return false;
}

isSubstring("hello there", "there");
isSubstring("Time to program", "Time");


//optional answer: SHORTEST WAY

function isSubstring(searchString, subString){
  return searchString.toLowerCase().includes(subString);
}
isSubstring("Time to program", "time");



/* echo
Input: A String.
Output: A String. The input string string echo-ized.

> echo("Mom!")
"MOM! ... Mom! ... mom!"
> echo("hey")
"HEY ... hey ... hey"
> echo("JUMp")
"JUMP ... JUMp ... jump" */

function echo(word){
  var upperWord = word.toUpperCase();

  var upperLtr = word.charAt(0).toUpperCase();
  var remainingString = word.slice(1);
  var upperString = upperLtr + remainingString;

  var lowerWord = word.toLowerCase();

  var stringEcho = upperWord + "..." + upperString + "..." + lowerWord;

  return stringEcho;
}

echo("JUMp");
echo("hey");
echo("Mom!");

/* Boolean
isEven
Input: A Number.
Output: A Boolean. true if the number is even, otherwise false
Condition: Must be written in terms of isOdd

> isEven(2)
true
> isEven(5)
false */


function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  return false;
};

isEven(5);
isEven(2);


// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false



// one potential answer: Just keep for reference only!
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// };

// function isOdd(el){
//     if(el % 2 === 0){
//       return false;
//     }
//     else{
//       return true;
//     }
//   };

// isEven(-55);
// isOdd(5);



// BETTER WAY: LEARN TO USE OPERATORS

function isOdd(num){
  if(num % 2 !== 0){
    return true;
  }
  else{
    return false;
  }
}
//constructed function in global scope and invoking
//functions.
function isEven(num){
  //input opposite to get false
  return !isOdd(num);
}
isEven(7);

//primary data types: numbers, strings, booleans, NAN, undefined, symbol


/*Comments from Rena:
isOdd: I've made revisions based on our Slack discussion.
isEven: I've kept one solution and other serves only as reference.


*/

/*Comment from Paris
isOdd needs a bit of work. I mentioned why in Slack

*/
