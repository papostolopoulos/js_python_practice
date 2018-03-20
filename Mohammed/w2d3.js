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

function isStopWord(word, stopWords){
//create new variable and assign empty string.
    var compareWord = "";
//invoke the containsPunctuation function here:
    if (containsPunctuation(word)) {
        compareWord = word.slice(0, word.length - 1);
    }
    else {
        compareWord = word
    }

    if(stopWords.indexOf(compareWord) !== -1){
        return true;
    }
    else{
        return false;
    }
}

function titleize(title, stopWords) {
  var endTitle = [];
  var titleArr = title.toLowerCase().split(" ");
  console.log(titleArr);

  for (var i = 0; i < titleArr.length; i++) {
    console.log("titleArr[i] is " + titleArr[i]);
    console.log("isStopWord(titleArr[i], stopWords) is " + isStopWord(titleArr[i], stopWords) + " so I am about to get in the if statement");

    if (isStopWord(titleArr[i], stopWords)) {
      endTitle.push(titleArr[i]);
    }
    else {
      // endTitle.push(titleArr[i][0].toUpperCase() + titleArr[i].slice(1));
      endTitle.push(titleArr[i][0].toUpperCase() + titleArr[i].substring(1));
    }

  }

  return endTitle.join(" ");
}



/*arraySumN
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
*/


function arraySumN(ary, n) {
  var endArr = [];

  for (var i = 0; i < ary.length; i++) {
    var el = ary[i]
    var sum = 0;
    console.log("I just defined sum and the value is: " + sum);

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

/*concatObjects
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
*/

function concatObjects(obj1, obj2){
  var endObj = Object.assign({}, obj1);
  console.log("The endObj has keys: " + Object.keys(endObj) + " and values: " + Object.values(endObj));


  for (var key in obj2){
    console.log("The key that is being checked is: " + key);
    if (endObj[key] === undefined) {
      endObj[key] = obj2[key];
    }
    else {
      endObj[key] += obj2[key];
    }
  }
  return endObj;
}



/* deepIndexOf

Write a function deepIndexOf(array, val) that takes a 2-dimensional array and val as its parameters.
It returns an array containing the pairs of indices that represents the location of val in array.
If the element does not exist, return [ [-1, -1] ]. */

function deepIndexOf(array, val) {
  var endArr = [];

  for (var i = 0; i < array.length; i++) {
    console.log("array[i] is: " + array[i]);

    for (var j = 0; j < array[i].length; j++) {

      if (array[i][j] === val) {
        endArr.push([i, j])
      }
    }
  }
  return endArr;
}
//Examples:
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
