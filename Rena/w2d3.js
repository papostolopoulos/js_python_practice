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

Second, write a function isStopWord(word, stopWords) that takes
 in a single word and returns true if it is a stop word.
The check will vary depending on if the word contains punctuation or not.
Using Array.prototype.indexOf will not work in all cases. See the third example.

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

function containsPunctuation(word){
    var punctuation = [";", "!", ".", "?", ",", "-"];
//create new variable and assign it the last character in sentence.
    var newWord = word[word.length - 1];
    // console.log(newWord);
//use .indexOf method to compare punctuation array against last character in sentence.
    if(punctuation.indexOf(newWord) !== -1){
        return true;
    }
    return false;
}
containsPunctuation("Bagels?");
containsPunctuation("flowers");



function isStopWord(word, stopWords){
//create new variable and assign empty string.
    var compareWord = "";
//invoke the containsPunctuation function here, if "true", then..:
    if (containsPunctuation(word)) {
//.slice(0, word.length - 1), start at 0 index and subtract 1 from
// length of word.
        compareWord = word.slice(0, word.length - 1);
    }
    else {
        compareWord = word
    }
//use .indexOf() method to find the index of each character:
    if(stopWords.indexOf(compareWord) !== -1){
        return true;
    }
    else{
        return false;
    }
}
isStopWord("love;", ["love", "the"]);
isStopWord("hate", ["love", "the"]);


function titleize(title, stopWords) {
//create new variable equal to empty array.
  var endTitle = [];
//create new variable that takes a string and puts everything to lowercase.
//Once every word is lowercase, then split the string so that it's an array.
  var titleArr = title.toLowerCase().split(" ");
  console.log(titleArr);

//loop through the string length:
  for (var i = 0; i < titleArr.length; i++) {
    console.log("titleArr[i] is " + titleArr[i]);
    console.log("isStopWord(titleArr[i], stopWords) is " + isStopWord(titleArr[i], stopWords) + " so I am about to get in the if statement");

//invoking the isStopWord function here...if true, then compare every word against stopWords.
    if (isStopWord(titleArr[i], stopWords)) {
//next use .push() to push the word into empty array.
      endTitle.push(titleArr[i]);
    }
    else {
      // endTitle.push(titleArr[i][0].toUpperCase() + titleArr[i].slice(1));
      endTitle.push(titleArr[i][0].toUpperCase() + titleArr[i].substring(1));
    }
    console.log("--------------------------");

  }
  return endTitle.join(" ");
}

titleize("forest gump, the runner", ["the"]); //"Forest Gump, the Runner"
// titleize("MASTER AND COMMANDER", ["and"]); //"Master and Commander"
// titleize("i LOVE; lover of mine", ["love", "of"]); //"I love; Lover of Mine"
// titleize("shall we dance?", ["dance"]); //"Shall We dance?"


/*arraySumN

1) Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers.
2) The function returns the indices of the inner arrays whose elements sum to n.

Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
*/


//First potential optional answer:
function arraySumN(ary, n){
    var ary = [ [0, 1], [2, 2, 0], [3, -2] ];

        function add(a, b){
            return a + b;
        }
//.reduce() applies a function against an accumulator and each element in the
//array (from left to right) to reduce it to a single value.
        var result = ary.reduce(add, 0);
        console.log(result);
}
arraySumN();


//This answer works!
function arraySumN(ary, n) {
//create new variable with empty array:
  var endArr = [];
//looping through the array length:
  for (var i = 0; i < ary.length; i++) {
//create new variable equal to array element.
    var el = ary[i]
//create new variable sum equal to 0.
    var sum = 0;
    console.log("I just defined sum and the value is: " + sum);
//looping through array element length:
    for (var j = 0; j < el.length; j++) {
      sum += el[j];
      console.log("I just added to sum the value of " + el[j] + "and therefore sum is: " + sum);
    }

    if (sum === n) {
      console.log("I got in the if statement because sum is " + sum + " and n is " + n);
      endArr.push(i);
    }

  }
  return endArr;
}

arraySumN([[0, 1], [2, 2, 0], [3, -2]], 1);


/*concatObjects
1) Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
2) It returns an object containing all of the keys found in both obj1 and
obj2.
3) If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2.
4) Otherwise, a key's value is its value
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
*/


//First optional answer - using .assign(): Cannot be used due to the fact
//the first argument is mutated and later properties overwrite earlier properties.
/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object.
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
// function concatObjects(obj1, obj2){

//     var cat1 = {name: "hello", bow: "pink"};
//     var cat2 = {name: "kitty", color: "white"};

//     var conCat = Object.assign({}, cat1, cat2);
//     console.log(conCat);
// }
// concatObjects();



//Second attempt - tried to use spread operator, but in the case of a
//key collision, the right-most (last) object's value wins out:
// function concatObjects(obj1, obj2){
//     var cat1 = {name: "hello", bow: "pink"};
//     var cat2 = {name: "kitty", color: "white"};
// // Using (...) spread operator:
//     var summary = {...cat1, ...cat2};
//     console.log(summary);
// }
// concatObjects();



//Third optional answer:  This works!
function concatObjects(obj1, obj2){
    var cat1 = {name: "hello", bow: "pink"};
    var cat2 = {name: "kitty", color: "white"};

    var finalConCat = cat1.name + cat2.name + " " + cat1.bow + " " + cat2.color;
    console.log(finalConCat);

}
concatObjects();


/* deepIndexOf

1) Write a function deepIndexOf(array, val) that takes a 2-dimensional array
and val as its parameters.
2) It returns an array containing the pairs of indices that represents
the location of val in array.
3) If the element does not exist, return [ [-1, -1] ].

Examples:
var ary = [
  [0, 2, 4],
  [1, 3, 9],
];

deepIndexOf(ary, 3); // => [ [1, 1] ]

var ary2 = [
  ["a", "b", "c"],
  [5, 0, 5, 0],
  [0, 1, 2]
];

deepIndexOf(ary2, 0); // => [ [1, 1], [1, 3], [2, 0] ]


*/

function deepIndexOf(array, val){

var ary2 = [
  ["a", "b", "c"],
  [5, 0, 5, 0],
  [0, 1, 2]
];

//looping through the array:
    for(var i = 0; i < ary2.length; i++){
        console.log(ary2[i]);
        var sum = arry2.indexOf(ary2[i], 0);
    }
    console.log(sum);
}
deepIndexOf();


/*
NOTES: from Rena:
1) For the concatObjects() method, the first two alternative options will
not work; I put the explanation up in the code block (scroll up).  It was a good learning
experience to figure out WHY it will NOT work.  I think my 3rd potential answer works better.
Answer: Okay now you need to see how you can concatenate each value under one key and in a new object.

2) For function arraySumN(ary, n), I rewrote my code and it returns a sum of numbers; but
I don't think it's correct. I tried to nest another function within a function.
Answer: the .reduce method will not work because you do not have an array of numbers
but you have an array with arrays as elements.
My previous comment reads:
arraySumN: The .reduce method you are trying to use is incorrectly used.
I suggest you try to use .reduce separately and try to understand its functionality.
Secondly, the problem is asking you for the sums of the elements for each one of the
arrays and its comparison to the n number. So if you have an array [[1, 3], [2, 5], [2, 2]]
You need to do [[1 + 3], [2 + 5], [2 + 2]]. If the sum of each one of the arrays is equal to n,
then you need to push the indice in the final array.


3) For function deepIndexOf(array, val) exercise, I tried to use .indexOf() method. I think
I am using correct method, but HOW I am applying it is incorrect?  Can
you explain what I am missing?
Answer: you have syntactical errors and type errors.
You need to remember that you have an array inside an array. For example:
ary2[1] = [5, 0, 5, 0]
Therefore ary2.indexOf(ary2[i], 0); is just going to give you a position for [5, 0, 5, 0]


4) You will find some other notes (commented out) where I tried to use alternative
methods, but they were not appropriate to use.  In another case, I have used alternative
methods (theser are NOT commented out) where I wanted to experiment and see if I
could solve the problem in a different way - but was only halfway successful to date.
Answer: OK

5) I still do not understand how to solve titleized() section. Would like to review at group mtg.
Your isStopWord function is half way through correct. Read my previous comment:
isStopWord: your if statement (line 74) is comparing a string to an array.
This is going to always result into "false".
You need to see if the string is included in the array and not if (string === array)



NOTES:
1) containsPunctuation takes only one parameter which is one word, not a full senctence
2) isStopWord takes two parameters, a word and an array of stop words. You need to
compare the word against the stop stopWords
3) in titleize() you need to invoke both containsPunctuation and isStopWord and
eventually titleize your sentence.
4) isStopWord: your if statement is comparing a string to an array. This is going to always
result into "false".
5) arraySumN: The .reduce method you are trying to use is incorrectly used.
I suggest you try to use .reduce separately and try to understand its functionality.
Secondly, the problem is asking you for the sums of the elements for each one of the
arrays and its comparison to the n number. So if you have an array [[1, 3], [2, 5], [2, 2]]
You need to do [[1 + 3], [2 + 5], [2 + 2]]. If the sum of each one of the arrays is equal to n,
then you need to push the indice in the final array.
6) concatObjects: Not sure why you are defining a couple of variable objects
(cat1, cat2) inside the function.
This is not necessary since the function takes the objects as parameters.
Also not sure why you are creating Arrays from the objects (Array.from).
You are expected to return an object and not an array.


*/
