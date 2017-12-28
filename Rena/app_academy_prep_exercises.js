//1. reverse
// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.
// Don't use String's reverse method; that would be too simple.
// After you figure it out, you can also use the reverse method.




// 2. Factorial
// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
// As a special case, `factorial(0) == 1`.




/* 3. Longest word
Write a method that takes in a string. Return the longest word in the string.
You may assume that the string contains only letters and spaces.
You may use the String `split` method to aid you in your quest.*/




// 4. SumNums
// Write a method that takes in an integer `num` and returns the sum of all integers
// between zero and num, up to and including `num`.




// 5. Time conversion
// Write a method that will take in a number of minutes,
// and returns a string that formats the number into `hours:minutes`.




// 6. Number of vowels
// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.




// 7. Palindrome string
// Write a method that takes a string and returns true if it is a palindrome.
// A palindrome is a string that is the same whether written backward or forward.
// Assume that there are no spaces; only lowercase letters will be given.
// palindromeString("Abba");
// palindromeString("This is a string");
// palindromeString("a teeta");
// palindromeString("abcba");




// 8. Write a method that takes a string in and returns true if the letter "z"
//appears within three letters **after** an "a".
// You may assume that the string contains only lowercase letters.
// aTozDistance("A zuper sided dog");
// aTozDistance("abcz");
// aTozDistance("abz");
// aTozDistance("baz");
// aTozDistance("a");
// aTozDistance("za");




// 9. Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `nil`.
// sumOfPairs([1, 3, 5, -3]);
// sumOfPairs([1, 3, 5]);




// 10. Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
// You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`.
// In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
// powerOfTwo(1);
// powerOfTwo(16);
// powerOfTwo(64);
// powerOfTwo(78);
// powerOfTwo(0);




// 11. Write a method that takes an array of numbers in. Your method should return the third greatest number in the array.
// You may assume that the array has at least three numbers in it.
// thirdGreatestNumber([5, 3, 7]);
// thirdGreatestNumber([5, 3, 7, 4]);
// thirdGreatestNumber([2, 3, 7, 4]);




// 12. Write a method that takes in a string. Your method should return the most common letter in the string, and
// a count of how many times it appears.
// mostCommonLetter("abbab");
// mostCommonLetter("This is a great place to start");
// mostCommonLetter("It is a great place to end as well");
// mostCommonLetter("abca");
// mostCommonLetter("abbab");




/* 13. Write a method that takes in a number and returns a string, placing a single dash before and after each odd digit.
There is one exception: don't start or end the string with a dash.
You may wish to use the `%` modulo operation; you can see if a number is even if it has zero remainder when divided by two*/
// dashString(203);
// dashString(303);
// dashString(333);
// dashString(3223);




/* 14. Write a method that takes in a string of lowercase letters and spaces,
producing a new string that capitalizes the first letter of each word.
You'll want to use the `split` and `join` methods.
Also, the String method `upcase`, which converts a string to all upper case will be helpful.*/
// capitalizeFirstLetter("this is a sentence");
// capitalizeFirstLetter("mike bloomfield");




/* 15. Write a method that takes in a string and an array of indices in the string.
Produce a new string, which contains letters from the input string in the order specified by the indices of the array of indices.*/
// scrambleString("abcd", [3, 1, 2, 0]); // == "dbca"
// scrambleString("markov", [5, 3, 1, 4, 2, 0]); // == "vkaorm"




/* 16. Write a method that takes in an integer (greater than one) and returns true if it is prime;
otherwise return false.
You may want to use the `%` modulo operation.
`5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`.
In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
More generally, if `m` and `n` are integers, `m % n == 0` if and only if `n` divides `m` evenly.
You would not be expected to already know about modulo for the challenge.*/
// isPrime(2); // == true: ' + (isPrime?(2) == true).to_s)
// isPrime(3); // == true: ' + (isPrime?(3) == true).to_s)
// isPrime(4); // == false: ' + (isPrime?(4) == false).to_s)
// isPrime(9); // == false: ' + (isPrime?(9) == false).to_s)




/*17. Write a method that returns the `n`th prime number. Recall that only
numbers greater than 1 can be prime.
(You can use the previous exercise's function if you want to to build this function - Perhaps a callback)*/
// nthPrime(1);// == 2: ' + (nthPrime(1) == 2).to_s)
// nthPrime(2);// == 3: ' + (nthPrime(2) == 3).to_s)
// nthPrime(3);// == 5: ' + (nthPrime(3) == 5).to_s)
// nthPrime(4);// == 7: ' + (nthPrime(4) == 7).to_s)
// nthPrime(5);// == 11: ' + (nthPrime(5) == 11).to_s)




/*18. Write a method that takes in a string of lowercase letters (no uppercase letters, no repeats).
Consider the *substrings* of the string: consecutive sequences of letters contained inside the string.
Find the longest such string of letters that is a palindrome.
Note that the entire string may itself be a palindrome.
You may want to use Array's `slice(start_index, length)` method,
which returns a substring of length `length` starting at index `start_index`:*/
// longestPalindrome("abcbd");// == "bcb"
// longestPalindrome("abba");// == "abba"
// longestPalindrome("abcbdeffe");// == "effe"




/*19. Write a method that takes in two numbers.
Return the greatest integer that evenly divides both numbers. You may wish to use the `%` modulo operation.*/
// greatestCommonFactor(3, 9);// == 3
// greatestCommonFactor(16, 24);// == 8
// greatestCommonFactor(3, 5);// == 1




/*20. Write a method that takes in an integer `offset` and a string.
Produce a new string, where each letter is shifted by `offset`.
You may assume that the string contains only lowercase letters and spaces.
When shifting "z" by three letters, wrap around to the front of the alphabet
to produce the letter "c".

You'll want to use String's `ord` method and Integer's `chr` method.
`ord` converts a letter to an ASCII number code. `chr` converts an ASCII number
code to a letter.
You may look at the ASCII printable characters chart: http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters

Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to 'z' having code 122.
You may also want to use the `%` modulo operation to handle wrapping of "z" to the front of the alphabet.
Difficulty: hard. Because this problem relies on outside information, we would not give it to you on the timed challenge. :-)

caesarCipher(3, "abc");// == "def"
caesarCipher(3, "abc xyz");// == "def abc"
*/





/*21 Write a method that takes in a string and returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters.
Count the number of letters that repeat, not the number of times they repeat in the string.

numRepeats("abdbc");// == 1
numRepeats("aaa");// == 1
numRepeats("abab");// == 2
numRepeats("cadac");// == 2
numRepeats("abcde");// == 0
*/




//------------------------------------//
//      Week 4 Day 1 - Coderbyte      //
//------------------------------------//

/*Using the JavaScript language,
have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. */



/*Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space. */



/*Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000. */


/*Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */



/*Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and
return the string in reversed order.

Use the Parameter Testing feature in the box below to test your code with different arguments.*/



/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed
and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)).
For the test cases, the range will be between 1 and 18. */



//------------------------------------//
//    Week 4 Day 1 - Project Euler    //
//------------------------------------//

/*Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. Answer: 233168*/



/*Largest palindrome product
Problem 2
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. Answer: 906609*/



/*Smallest multiple
Problem 3
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? Answer: 232792560 */



/*Even Fibonacci numbers
Problem 4
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
Answer: 4613732
*/



//------------------------------------//
//            Week 3 Bonus            //
//------------------------------------//

/*
lengthOfHypotenuse
Write a function lengthOfHypotenuse(sideA, sideB) that takes in two numbers.
These numbers represent the sides of a right triangle that are adjacent to the right angle.
This function returns the length of the hypotenuse of the triangle.
Hint: To find the length of a hypotenuse, we can use the Pythagorean Theorem (a^2 + b^2 = c^2), where
c is the length of the hypotenuse, and a and b are the lengths of the remaining sides.*/



/*collidingCircles
A circle is represented by a x-coordinate position, y-coordinate position, and radius (e.g. { x: 0, y: 0, radius: 1 }).
The x-y coordinates represent the position of its center.
Write a function collidingCircles(circle1, circle2) that takes in two circle objects as input and
returns true if the circles are colliding, otherwise false.

Hints:
The lengthOfHypotenuse function may be useful here.
Finding the difference between the two circles' coordinate positions will give you the length of two sides of a right triangle.*/



/*diagonalWalk
Write a function diagonalWalk(path) that takes a string (path) of characters as its input.
These characters will be either u, d, l, or r, representing moves "up", "down", "left", or "right", respectively.
The function returns true if we are along the diagonal axis of our starting position, false otherwise.
Assume each step moves us the same distance.*/




/*Predict The Output and Determine the value of this

function foo(){
  console.log(this.name);
}

var cat = {
  name : "whiskers"
}

var dog = {
  name : "rover"
}

foo(); //<=undefined
foo.bind(cat)(); //<=Whiskers
dog.foo(); //<=Error. dog.foo is not a function
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}//whiskers

var dog = {
  name : "rover"
}

var bar = cat.foo.bind(dog);

bar() //<=
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

setTimeout(cat.foo, 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
global.name = "currie";

var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
};

var dog = {
  name : "rover"
};


setTimeout(cat.foo.bind(this), 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

var dog = {
  name : "rover"
}

setTimeout(cat.foo.bind(dog), 1000);
*/

//------------------------------------//
//            Week 2 Bonus            //
//------------------------------------//
/* collisionDetected

A block is object that looks like this:
{
  x : 0,
  y : 0,
  width : 10,
  height : 10
}
Write a function collisionDetected(block1, block2) that returns true if block1 and block2 intersect, false otherwise. */



/* Debug the Programs */



//-----------------------------------------



/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.
Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/


/***************************************************************************
Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
It returns an object containing all of the keys found in both obj1 and
obj2. If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2. Otherwise, a key's value is its value
in the original object. Do not modify the arguments.

Example 1:
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
cat3; // => { name: "hellokitty", bow: "pink", color: "white"}

Example 2:
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
***************************************************************************/


/* deepIndexOf

Write a function deepIndexOf(array, val) that takes a 2-dimensional array and val as its parameters.
It returns an array containing the pairs of indices that represents the location of val in array.
If the element does not exist, return [ [-1, -1] ]. */



//----------------------
/*Tic-Tac-Toe Project

Assume you have a 3 x 3 array:

[ [ , , ],
  [ , , ],
  [ , , ] ]
It represents a tic-tac-toe grid!
Spaces filled by "-" represent empty spots and spaces can be filled by either "X" or "O" representing marked spots.
For example,


Part 1

Write a function tttWon(grid) which takes a 3 x 3 grid array and returns true if there's a tic-tac-toe winner and false otherwise.
You can assume that grid is a 2D array fully filled with single character "-", "X", and "O"'s.
This program is a great time to practice decomposition (i.e. write helper functions).
If you're not sure about how to play tic-tac-toe, click here.

Hints:
Write tttHorizontal(grid) which takes grid and returns true if there's three in a row and false otherwise.
Write tttVertical(grid) which takes grid and returns true if there's three in a column and false otherwise.
Write tttDiagonal(grid) which takes grid and returns true if there's three in a diagonal and false otherwise.*/



/*
Part 2

Write a function tttWinner(grid) so that it returns the mark of the winner if there is a winner or "no winner!" otherwise.
You have the majority of the logic for this already; you just wrote it!
Modify your tttWon(grid) and your helper functions to solve for the winner. */



//------------------------------------//
//            Week 1 Bonus            //
//------------------------------------//

/*dynamicFizzBuzz

Define a function dynamicFizzBuzz(max, num1, num2) that
takes three numbers as arguments and prints to the console every number from 0 to max
that is divisible by either num1 or num2, but not both. */


//It will give Bobby for everything lower than -5, Ricky for -5 to 4 and Junior for 5 and larger.




/*minMaxDifference

Write a function minMaxDifference(array) that return the difference between
the largest value and the smallest value in the array.
Assume array is an array of numbers. */



/* dogsAndBones

You have 100 dogs (soo many dogs!).
You have arranged all your dogs in a line.
Initially, none of your dogs have any bones.
You take 100 rounds walking around the dogs, always starting at the beginning.
Every time you stop at a dog, you put a bone in it's mouth if it doesn't have one,
and you take away a bone if it has one on (so cruel).
The first round, you stop at every dog.
The second round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.).
The third round, you only stop at every 3rd dog (#3, #6, #9, #12, etc.).
You continue this process until the 100th round (i.e. you only visit the 100th dog).

Write a program dogsAndBones() that prints which dogs have bones at the end. */



//------------------------------------//
//            Week 4 Day 1            //
//------------------------------------//

/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

DO NOT USE THE BUILT IN ARRAY#FOREACH METHOD

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/


// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier.

Examples:  // ["This element is 1", "This element is 2", "This element is 3"] //return value

>
******************************************************************************/


/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
******************************************************************************/

var students = [
  {"name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {"name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];



/******************************************************************************
Write a function laligatSequence(base, n)
A number's laligat sum is the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence
*******************************************************************************/


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


// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value



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



//------------------------------------//
//            Week 3 Day 4            //
//------------------------------------//

/* Sentiment Detector
For this project, you will create a function detectSentiment(filename, sentence, callback).
It takes the following arguments:

filename: a string. The filename (and path) to the sentiment text file
sentence: a string. The sentence whose sentiment we will detect
callback: a function. This callback will be run after the sentiment score has been determined.
It will receive the sentence and score as arguments.

Examples

detectSentiment("sentimentDict.txt", "I love you", function(sentence, score){
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score){
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score){
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score){
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
var sentence = "I despise your hateful attitude";
detectSentiment("sentimentDict.txt", sentence, function(sentence, score){
  console.log("~~~~Example 5~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
When run in node it should output:

$ node yourSentimentDetectorFile.js
~~~~Example 1~~~~
'I love you' has a score of 2.
~~~~Example 2~~~~
'I LOVE you so much' has a score of 2.
~~~~Example 3~~~~
'You are a loveless fool' has a score of -2.
~~~~Example 5~~~~
'I despise your hateful attitude' has a score of -2.
~~~~Example 4~~~~
'I cherish your smile' has a score of 3.
Hints (feel free to try it without the hints first)

Start with the getRecordsFromFile function that we built in class. This will pass the callback you give it all the lines in the file as elements (strings) in an array.
In the callback that is being passed to getRecordsFromFile:

Initialize the score to 0.

Split the sentence into words. Sure, we could just use String.prototype.indexOf, but doing so would cause potential confusion between words that are similar but have different sentiments (e.g. "love" and "loveless")

Iterate over the records. For each record (which corresponds to a single line in the text file), you'll need to get the word and it's associated sentiment. Look at the text file. How can you parse this string to get the data you're looking for. Use decomposition to keep your code readable.

If the word is in the sentence...

and has a positive sentiment, add 1 to the score
and has a negative sentiment, subtract 1 from the score
Once the score has been found, run the callback that was passed to detectSentiment, passing in the sentence and the score as parameters. */

//------------------------------------//
//            Week 3 Day 3            //
//------------------------------------//

/*
Higher-Order Functions
Write a function myForEach(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built-in Array.prototype.forEach method. The return value is irrelevant.

 1 is at position 0 in array [1,2,3]
 2 is at position 1 in array [1,2,3]
 3 is at position 2 in array [1,2,3] */



/* Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns true.
*/



/* Write a function myReject(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
It should return a new array of all the elements in the input array arr where the callback cb returns false.

 */

function myReject(arr, cb) {
  //enter your code here
}

 myReject([1,2,3,4,5,6], /*run your callback function here*/); // [1,3,5]

 myReject([1,2,3,4,5,6], /*Run your callback function here*/); // [2,4,6]


/* Write a function myMap(arr, cb) that accepts an array and a callback.
It should pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in Array.prototype.map method.
It should return an array where each element is the return value of the callback
given the element in the corresponding position.
See the examples if this is confusing.*/

function myMap(arr, cb) {
  // enter your code here
}

myMap([1,2,3], /*run your callback here*/); //[2, 4, 6]
myMap([1,2,3], /*run your callback here*/); // [1, 3, 5]
myMap(["A", "B", "C"], /*run your callback here*/); // ["A0", "B1", "C2"]



/* Write a function createExpFunc(num) that accepts a positive integer.
It returns a function which will raise its input to the power specified by num
and returns the value. -- TIP: THINK OF CLOSURES*/

function createExpFunc(num) {

}

powerTwo(2); // 4
powerTwo(6); // 36


powerThree(2); // 8
powerThree(6); // 216


powerTen(2); // 1024
powerTen(6); // 60466176


//------------------------------------//
//            Week 3 Day 2            //
//------------------------------------//

/* Clock
For this mini-project, you will create a clock that ticks every second, displaying the current time.
READ ALL OF THE INSTRUCTIONS FIRST! Ask questions if you don't understand something.

Create a clock object;
Give it a property totalSeconds that starts at 0; */

var clock = {
  //enter your code here
}

/* Write a method getSeconds that will return the second count of our clock.
It should return a value from 00 to 59, just like a normal clock.
hint: Think about this is terms of totalSeconds. If totalSeconds equals 10, then this method should return "10".
If totalSeconds is 61 (01:01), this method should return "01".
hint: Play with the modulus operator. If I modulo x by i (x % i), will the result ever be greater than i?
hint: If the value is less than 9, you may have to append a 0 to the beginning

Test you getSeconds method.
Open node and manually set the totalSeconds and make sure getSeconds is giving you the right value. Test cases below:
If clock.totalSeconds = 0, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 9, clock.getSeconds() will evaluate to "09"
If clock.totalSeconds = 13, clock.getSeconds() will evaluate to "13"
If clock.totalSeconds = 60, clock.getSeconds() will evaluate to "00"
If clock.totalSeconds = 1342, clock.getSeconds() will evaluate to "22" */

var clock = {
  //copy your code from above and continue with new property
}



/* Write a method getMinutes that will return the minute count of our clock.
It should return a value from 00 to 59, just like a normal clock.

hint: Write this in terms of totalSeconds, not the result of getSeconds?
Can you determine why? Think about it and if you're having trouble, call over the instructor.
hint: This will involve a few mathematical operations. How many minutes is 120 seconds? 2 minutes.
What math do we intuitively use to determine that?
hint: How many minutes are in 135 seconds? Still only 2 minutes.
The remainder exists as the second count. You may have to use some Math (hint hint) for cases like this.

Test your getMinutes method:

If clock.totalSeconds = 0, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 40, clock.getMinutes() will evaluate to "00"
If clock.totalSeconds = 60, clock.getMinutes() will evaluate to "01"
If clock.totalSeconds = 134, clock.getMinutes() will evaluate to "02"
If clock.totalSeconds = 4342, clock.getMinutes() will evaluate to "12" */

var clock = {
  //copy your code from above and continue with new property
}

clock.getMinutes();

/* Write a method getHours that will return minute count of our clock.
It can return any value from 00 to being arbitrarily high (i.e 72)

Test getHours:
If clock.totalSeconds = 0, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 200, clock.getHours() will evaluate to "00"
If clock.totalSeconds = 4342, clock.getHours() will evaluate to "01"
If clock.totalSeconds = 20000, clock.getHours() will evaluate to "05"
If clock.totalSeconds = 900000, clock.getHours() will evaluate to "250" */

var clock = {
  totalSeconds: 0,
  getSeconds: function() {
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) {// 0 to 9 seconds
        console.log("0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) {//more than nine but less than 60 seconds
        console.log(clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 <= 9) {//more than 60 seconds with a remainder of less than 9
        console.log("0" + clock.totalSeconds % 60);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds % 60 > 9) {//more than 60 seconds with a remainder of more than 9
        console.log(clock.totalSeconds % 60);
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getMinutes: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log(Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + (clock.totalSeconds / 60) % 60 + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  },
  getHours: function(){
    setInterval(function(){
      if (clock.totalSeconds >= 0 && clock.totalSeconds < 10) { //0 to 9 seconds
        console.log("00:00:0" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 10 && clock.totalSeconds < 60) { // up to 60 seconds
        console.log("00:00:" + clock.totalSeconds);
      }
      else if (clock.totalSeconds >= 60 && clock.totalSeconds < 600) { //more than one but less than ten minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:0" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 600 && clock.totalSeconds < 3600) { //more than ten but less than 60 minutes
        if (clock.totalSeconds % 60 <= 9) { //up to 9 seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (clock.totalSeconds % 60 > 9) { //more than nine seconds
          console.log("00:" + Math.floor(clock.totalSeconds / 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 3600 && clock.totalSeconds < 36000) { //more than 60 minutes but less than 600 minutes (10 hours)
        if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours, 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours, 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60)) % 60 + ":" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) <= 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //up to 9 hours but more than 9 minutes && up to 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60)) % 60 + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //up to 9 hours but more than 9 minutes && more than 9 seconds
          console.log("0" + Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60)) % 60 + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds >= 36000 && clock.totalSeconds < 86400) {//more than 600 minutes but less than 1440 (24 hours)
        if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours, 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 <= 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours, 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + ":0" + Math.floor((clock.totalSeconds / 60) % 60) + ":" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 <= 9) {
          //more than 9 hours but more than 9 minutes && up to 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60) % 60) + ":0" + clock.totalSeconds % 60);
        }
        else if (Math.floor(clock.totalSeconds / 3600) > 9 && (clock.totalSeconds / 60) % 60 > 9 && clock.totalSeconds % 60 > 9) {
          //more than 9 hours but more than 9 minutes && more than 9 seconds
          console.log(Math.floor(clock.totalSeconds / 3600) + Math.floor((clock.totalSeconds / 60) % 60) + ":" + clock.totalSeconds % 60);
        }
      }
      else if (clock.totalSeconds === 86400) { //1440 minutes (24 hours). The clock becomes zero
        clock.totalSeconds = 0;
        console.log("00:00:00");
      }
      clock.totalSeconds += 1;
    }, 1000);
  }
}

clock.getHours();

/*
Write a method printTime that logs the time in clock format.
Use getHours, getMinutes, and getSeconds
You will need to do some concatenation

If clock.totalSeconds = 0, clock.printTime() will log "00:00:00"
If clock.totalSeconds = 200, clock.printTime() will log "00:03:20"
If clock.totalSeconds = 3871, clock.printTime() will log "01:04:31" */

var clock = {
  //copy your code from above and continue with new property
}



/* Write a method tick(startSecond). What this method should do is outlined below:
If startSecond was passed in (we'll make it optional), set totalSeconds to be equal to it.
Increment totalSeconds.
Print the current time to the console.
Using either setTimeout or setInterval, make this behavior repeat itself every second.
Remember, arguments in Javascript are optional, so no need to worry about constantly setting the startSecond parameter.



Test is out. When you're done, you'll have a clock that prints out a new time every second!
Bonus: Try writing tick using both setTimeout and setInterval! I called my methods intervalTick and timeoutTick. */

var clock = {
  //copy your code from above and continue with new property
}

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


/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Example
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/



/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/


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


//------------------------------------//
//            Week 2 Day 5            //
//------------------------------------//

/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.

** Examples:
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [0, 4], [1, 3] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/


/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)

** Examples:
** myIndexOf([1, 2, 3, 4, 5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/


/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Examples:
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/



/******************************************************************************
** Write a function that #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.

** Examples:
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/



//------------------------------------//
//            Week 2 Day 4            //
//------------------------------------//
// Read These Programs

var foo = 5;

function bar(){
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); //What is foo on this line?
console.log(bar()); //What is bar() on this line?
console.log(foo); //What is foo on this line?

//-------------------------------------------
var foo = 5;

function bar(foo){
  return foo + 65;
}

console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?
console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?

//-------------------------------------------

var foo = "Happy";

for(var foo = 0; foo <= 5; foo += 1){
  console.log(foo); //What will foo be on each iteration?
}

console.log(foo); //What will foo be on this line? -->

//------------------------------------

var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?

function foo(){
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?

  var innerFoo = function(){
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line? -->
}

console.log("2: " + bar); //2: What will bar be on this line? -->
foo();
console.log("5: " + bar); //5: What will bar be on this line? -->

//-----------------------------------

var bar = "dance";

function foo(){
  bar = 10;

  var innerFoo = function(){
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line?
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line?
}

console.log("1: " + bar); //1: What will bar be on this line? -->
foo(); //2: 10 3: 10
console.log("4: " + bar); //4: What will bar be on this line? -->

/* Factorial
Write a function factorial(n), that returns the factorial of the number n.
Example: factorial(4) => 4 * 3 * 2 * 1 => 24*/
// factorial(1); //1
// factorial(4); //24
// factorial(5); //120
// factorial(10); //3628800

/* Long Word Count
Write a function longWordCount(string) that takes in a string and returns
the number of words longer than 7 characters. */
// longWordCount(""); //0
// longWordCount("short words only"); //0
// longWordCount("one reallylong word"); //1
// longWordCount("two reallylong words inthisstring"); //2
// longWordCount("allwordword longwordword wordswordword"); //3
// longWordCount("seventy schfifty five"); //1


/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs. */
// lcm(2, 3); //6
// lcm(6, 10); //30
// lcm(24, 26); //312


/* Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel. */
// hipsterfy("proper"); //"propr"
// hipsterfy("proper tonic panther"); //"propr tonc panthr"
// hipsterfy("towel flicker banana"); //"towl flickr banan"
// hipsterfy("runner anaconda"); //"runnr anacond"
// hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"



//------------------------------------//
//            Week 2 Day 3            //
//------------------------------------//

/*titleize

Write a function titleize(title, stopWords) that takes in a string title and and array of strings stopWords.
Return the title where every word that does not exist in the stopWords array is capitalized; all others lowercase.

Hints
Test after you write every function!

First write a function containsPunctuation(word) that takes in a single word
and returns true if the word contains a punctuation mark.
Feel free to use the punctuation array we've given you below.

Second, write a function isStopWord(word, stopWords) that takes in a single word and returns true if it is a stop word. The check will vary depending on if the word contains punctuation or not. Using Array.prototype.indexOf will not work in all cases. See the third example.

Third, write the titleize function, using the functions you wrote before.

"hey"[0] returns a copy of h, not the original h, therefore:
var myStr = "hey"
myStr[0] = "w"
myStr === "hey", not "wey"
Remember Array.prototype.slice? If not, look at the documentation and play in the console.
var punctuation = [";", "!", ".", "?", ",", "-"];
>titleize("forest gump, the runner", ["the"])
"Forest Gump, the Runner"

>titleize("MASTER AND COMMANDER", ["and"])
"Master and Commander"

>titleize("i LOVE; lover of mine", ["love", "of"])
"I love; Lover of Mine"

>titleize("shall we dance?", ["dance"])
"Shall We dance?" */
// titleize("forest gump, the runner", ["the"]); //"Forest Gump, the Runner"
// titleize("MASTER AND COMMANDER", ["and"]); //"Master and Commander"
// titleize("i LOVE; lover of mine", ["love", "of"]); //"I love; Lover of Mine"
// titleize("shall we dance?", ["dance"]); //"Shall We dance?"

//------------------------------------//
//            Week 2 Day 2            //
//------------------------------------//

/* divisibleByThreePairSum

Write a function divisibleByThreePairSum(array) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of three.

> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]] */



/* Sometimes you will need to nest a loop inside of another loop.
Let's say we are given an array and have to return the indices of all pair of elements that sum to 0.
This means we we will have to add each element to the other elements in the array.

> pairZero([4, 1, 0,])
[ ]
> pairZero([1, 2, -1])
[ [0, 2] ]
> pairZero([0, 2, 5, -2, 0])
[ [0, 4], [1, 3] ] */


/* isValidEmail
>isValidEmail("junk@gmail.com"); --> true
>isValidEmail("now.what@now.co"); --> true
>isValidEmail("i_am_happy@feelings.net"); --> true
>isValidEmail("my@website@gmail.com"); --> false
>isValidEmail("webby@gmail.co.net"); --> false
>isValidEmail("anthony@ira_ladson.com"); --> false
>isValidEmail("anthony!@ladson.com"); --> false

Write a function isValidEmail(email) that takes an email string. Return true if the email is considered valid. A valid email:
Contains one and only one "@" symbol
All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
There is one and only one dot "." after the "@" symbol
Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];*/
// isValidEmail("junk@gmail.com"); //--> true
// isValidEmail("now.what@now.co"); //--> true
// isValidEmail("i_am_happy@feelings.net"); //--> true
// isValidEmail("my@website@gmail.com"); //--> false
// isValidEmail("webby@gmail.co.net"); //--> false
// isValidEmail("anthony@ira_ladson.com"); //--> false
// isValidEmail("anthony!@ladson.com"); //--> false */



/* peakFinder

Write a function peakFinder(array) that takes in an array of numbers.
It should return an array containing the indices of all the peaks.
A peak is an element that is greater than both of its neighbors.
If it is the first or last element, it is a peak if it is greater than its one neighbor.
Assume the array has a length of at least 2.
peakFinder([1,2,3,2,1]); //[2]
peakFinder([2,1,2,3,4,5]); //[0, 5]
peakFinder([4,6,9,4,2,-7,2,-4,5]); //[2,6,8]
*/


//------------------------------------//
//            Week 2 Day 1            //
//------------------------------------//
/*
** Write a function #royalWe(sentence) that returns an string where every 'I'
** is replaced with 'we', every 'mine' is replaced with 'ours', every 'my' is replaced with 'our',
** and every 'me' is replaced with "us".

** Examples:
** royalWe("I want to go to the store.") //=> "we want to go to the store."
** royalWe("This is my house and you will respect me!") //=> "This is our house and you will respect us!"
** royalWe("This is mine...") //=> "This is ours..."
** royalWe("Jump for my love") //=> "Jump for our love"
*/


/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.

** Examples:
** reverseRange(2, 7) //=> [ 6, 5, 4, 3 ]
** reverseRange(4, 2) //=> []
*/

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed.

** Examples:
** reverseSentence("Go to the store") \\=> "store the to Go"
** reverseSentence("Jump, jump for joy") \\=> "joy for jump Jump,"
*/

/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

** Example:
** magicNumbers(20) \\=> [ 4, 6, 8, 16, 18, 20 ]
*/



//------------------------------------//
//            Week 1 Day 4            //
//------------------------------------//

/* Cookie Monster Project

For this project, we are going to make a cookieMonster object.
Type mocha in the command prompt/terminal to see all the failing tests. Your job will be to make them all pass.

Look at the first failing test.
It is expecting cookieMonster to have a property called name that evaluates to Fred.
In cookieMonster.js, add the property name and set it to Fred.

Run mocha again. Yay! The spec has passed.
Now fix all the "initial properties" specs.

We are going to create two methods #eat(food) and #isAlrightMeal(food):

#eat(food): returns a score (integer). food is an array of of string food items.
Every food item that is a favorite food add +2 to the score;
good foods add +1;
bad foods add -1;
hated foods add -2.
Make sure the spec passes.

#isAlrightMeal(food): return true if the food score is within -1, 1. */



//------------------------------------//
//            Week 1 Day 3            //
//------------------------------------//

/* Arrays
logEach
Write a function logEach(array) that prints every element of the array and its index to the console . Example:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson */


/* maxValue
Write a function maxValue(array) that returns the largest value in the array. Assume array is an array of numbers.
> maxValue([43, 12, 6, 2])
43
> maxValue([])
null
> maxValue([-4, -10, 0.43])
0.43 */


/* printRange

Write a function printRange(start, end) that prints all the numbers from start to end.
If a range doesn't exist (start > end), then print "Bad Range" instead. Example:

> printRange(22, 24)
22
23
24
> printRange(5, 1)
Bad Range */


/* Functions
isPrime
Write a function isPrime(number) that returns a boolean indicating if number is prime or not.
Assume number is a positive integer.

> isPrime(2)
true
>isPrime(1693)
true
> isPrime(15)
false
> isPrime(303212)
false */


/* firstNPrimes
Using isPrime, write a function firstNPrimes(n) that returns an array of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */


/* sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.
> sumOfNPrimes(0)
0
> sumOfNPrimes(1)
2
> sumOfNPrimes(4)
17 */


//------------------------------------//
//            Week 1 Day 2            //
//------------------------------------//

/* logBetween

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive.
Inclusive means that the the range that will be printed will include the lowNum and highNum.

logBetween(-1, 2); // from -1 to 2
logBetween(14, 6); //nothing printed
logBetween(4,6); //from 4 to 6 */



/* fizzBuzz

3 and 5 are magic numbers.
Define a function fizzBuzz(max) that takes a number and prints to the console every number
from 0 to max that is divisible by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18 */



/* isFactorOf

Define a function isFactorOf(number, factor) that returns true if factor is a factor of number. Otherwise, false.

isFactorOf(6,2); //true
isFactorOf(-6, 2); //true
isFactorOf(5,0); //false
 */



/* isPrime
Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.*/
// isPrime(2); //true
// isPrime(10); //false
// isPrime(15485863); //true
// isPrime(3548563); //false

/*Debug The Program */


//------------------------------------//
//            Week 1 Day 1            //
//------------------------------------//

/* Numbers
isOdd
Input: A Number.
Output: A Boolean. true if the number is odd, otherwise false*/


isOdd(2);
isOdd(5);
isOdd(-17);


function isOdd(num){
  if(num % 2 === 1){
    return true;
  }
  else{
    return false;
  }
};

isOdd(2);


/* plusFive
Input: A Number.
Output: A Number. The sum of the input and 5.*/


plusFive(0); //5
plusFive(-2); //3
plusFive(21); //26


function plusFive(num){
  return num + 5;
}

plusFive(0);


/* threeOrSeven
Input: A Number.
Output: A Boolean. true if the number is divisible by 3 or 7*/


threeOrSeven(3); //true
threeOrSeven(42); //true
threeOrSeven(8); //false


function threeOrSeven(num){
//I think I am writing this incorrectly? I tried " === 0" instead of 1, 
//but still have issues getting correct output. What am I doing wrong?
  if(num % 3 === 1 || num % 7 === 1){ 
    return true;
  }
  else{
    return false;
  }
};

threeOrSeven(42);


/* Order of Operations
Evaluate each expression. Check your answer in the console.
1 + 1 * 5
(1 + 1) * 5
1 + 2 - 5 / 6 - 1
5 * 5 % 13
5/(-1 * (5 - (-10))) */

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


/* yell
Input: A String. Assume no punctuation.
Output: A String. A yelled version of the input.*/


yell("I want to go to the store"); //"I WANT TO GO TO THE STORE!!!"
yell("Time to program"); //"TIME TO PROGRAM!!!"


function yell(str){
  return str.toUpperCase() + "!!!";
}

yell("Time to program");


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

isSubstring("Time to program", "time"); //true
isSubstring("Jump for joy", "joys"); //false


function searchString(str){
  // I think I need to use a nested or call-back function, correct?
  //I am LOST...here...
  for(var i =0; i < str.length; i++){
    if ????
  }

}


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

echo("JUMp")

/* Boolean
isEven
Input: A Number.
Output: A Boolean. true if the number is even, otherwise false
Condition: Must be written in terms of isOdd

> isEven(2)
true
> isEven(5)
false */

isEven(2); //true
isEven(5); //false


function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
};

isEven(5);


// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false

isEven(2) //=> true
isEven(5) //=> false
isEven(-55) //=> false


//This one is very confusing! I am trying to understand what it's asking,
//but having difficulty.  I think I got 1/2 correct?
function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
  function isOdd(el){
    if(num % 3 === 0){
      return true;
    }
    else{
      return false;
    }
  }
}

isEven(-55)
