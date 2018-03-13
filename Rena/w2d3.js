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
containsPunctuation("flowers.");



function isStopWord(word, stopWords){
//create new variable and assign empty string.
    var compareWord = "";
//invoke the containsPunctuation function here:
    if (containsPunctuation(word)) {
        compareWord = word.slice(0, word.length - 2)
    }
    else {
        compareWord = word
    }
    console.log(compareWord);

    if(compareWord === stopWords){
        return true;
    }
    else{
        return false;
    }
}
isStopWord("LOVE;", ["V"]);




function titleize(title, stopWords){
    var punctuation = [";", "!", ".", "?", ",", "-"];
//create new variable and use .split(" ") method to turn string into array.
    var wordArr = title.split(" ");
    var newArray = [];

    for(var i = 0; i < wordArr.length; i++){
        // console.log(i);
        // console.log(wordArr[i].toLowerCase());
        var lowerCaseWord = wordArr[i].toLowerCase();

        if(punctuation.indexOf(wordArr, stopWords)) {// Got lost here....
        newArray.push(wordArr); //Something is missing?
        // console.log(newArray);
    }
}
titleize("Shall we dance?", ["dance"]);


/*arraySumN
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. 
The function returns
the indices of the inner arrays whose elements sum to n.
Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
*/


//new array variable is located in global scope:
var ary = [ [0, 1], [2, 2, 0], [3, -2] ];

function arraySumN(ary, n){
    for(var i = 0; i < ary.length; i++){
        // console.log(ary[i]);
    }
//.reduce() applies a function against an accumulator and each element in the 
//array (from left to right) to reduce it to a single value.
    if(ary.reduce(add, 0)){ // something is wrong here!
        function add(a, b){
        var sum = a + b;
        // console.log(sum);
        return sum;
        }
    }
}
arraySumN(ary, 1);

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
    var cat1 = {name: "hello", bow: "pink"};
    var cat2 = {name: "kitty", color: "white"};

    var cat1Arr = Array.from(cat1);
    console.log(cat1Arr);

    var cat2Arr = Array.from(cat2);
    console.log(cat2Arr);

    var merge = cat1.concat(cat2);
    console.log(merge);
}

concatObjects(cat1, cat2);


/* deepIndexOf

Write a function deepIndexOf(array, val) that takes a 2-dimensional array and val as its parameters.
It returns an array containing the pairs of indices that represents the location of val in array.
If the element does not exist, return [ [-1, -1] ]. */

function deepIndexOf(array, val){

}
deepIndexOf();


/* NOTES:
1) containsPunctuation takes only one parameter which is one word, not a full senctence
2) isStopWord takes two parameters, a word and an array of stop words. You need to
compare the word against the stop stopWords
3) in titleize() you need to invoke both containsPunctuation and isStopWord and
eventually titleize your sentence.


*/
