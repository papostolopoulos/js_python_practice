/* deepIndexOf
1) Write a function deepIndexOf(array, val) that takes a 2-dimensional array
and val as its parameters.
2) It returns an array containing the pairs of indices that represent
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


//Same function but used forEach method instead
function deepIndexOf(array, val) {
  var endArr = [];

  array.forEach(function (element, index) {

    element.forEach(function (el, idx) {

      if (el === val) endArr.push([index, idx]);

    });

  });

  return endArr;
}

var ary = [[0, 2, 4],[1, 3, 9]];
var ary2 = [["a", "b", "c"],[5, 0, 5, 0],[0, 1, 2]];
deepIndexOf(ary, 3); // => [ [1, 1] ]
deepIndexOf(ary2, 0); // => [ [1, 1], [1, 3], [2, 0] ]


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


function concatObjects(obj1, obj2){
  var endObj = Object.assign({}, obj1);
  console.log("The endObj has keys: " + Object.keys(endObj) + " and values: " + Object.values(endObj));


  for (var key in obj2){
    console.log("The key that is being checked is: " + key);
    if (endObj[key] === undefined) {
      // If the property's value is undefined (meaning that the property does not
    // exist in the object) then create a new property with a value from obj2
      endObj[key] = obj2[key];
    }
    else {
      endObj[key] += obj2[key];
    }

  }
  return endObj;
}



var splash = {pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson", city: "Oakland"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}






function sayHi(name){
    return "hello " + name;
}

function Person(name, address) {
  this.name = name;
  this.address = address;
  this.whereDoYouLive = function () {
    return "My address is " + this.address;
  }
}

var paris = new Person("Paris", "999 Market Av");

Person.prototype.sayHello = function(){
  return "Hello, I am " + this.name;
}


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

isStopWord("love", ["love", "of"])
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
isStopWord("love;", ["love", "the"]);
isStopWord("hate", ["love", "the"]);




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
    console.log("--------------------------");

  }


  return endTitle.join(" ");
}

// titleize("forest gump, the runner", ["the"]); //"Forest Gump, the Runner"
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

arraySumN([[0, 1], [2, 2, 0], [3, -2]], 1); //[0, 2]

[
  [
    {

    }
  ],
  [
    {}
  ],
  [
    {}
  ]
]









function Person(name, address) {
  this.name = name || "No entry";
  this.address = address || "No entry";
  this.sayHi = function(){
    return "Hello, I'm " + this.name;
  };
}
console.log(name);

var mo = new Person("Mohammed", "999 Second Av");
var rena = new Person("Rena", "111 Main St");
var paris = new Person();







/* isValidEmail:
Write a function isValidEmail(email) that takes an email string.
Return true if the email is considered valid. A valid email:
1. Contains one and only one "@" symbol
2. All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
3. There is one and only one dot "." after the "@" symbol
4. Besides the dot ".", all the characters after the "@" are in the alphabet
(no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];*/
// isValidEmail("junk@gmail.com"); //--> true
// isValidEmail("now.what@now.co"); //--> true
// isValidEmail("i_am_happy@feelings.net"); //--> true
// isValidEmail("my@website@gmail.com"); //--> false
// isValidEmail("webby@gmail.co.net"); //--> false
// isValidEmail("anthony@ira_ladson.com"); //--> false
// isValidEmail("anthony!@ladson.com"); //--> false

function isValidEmail(email) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphanumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","_","."];
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  for (var i = 0; i < split1.length; i++) {
    if (alphanumeric.indexOf(split1[i]) === -1) {
      console.log("condition 2");
      return false;
    }
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}


//Second solution with RegEx for each condition
function isValidEmail(email) {
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  if (!/^[A-Za-z0-9\._,]+$/.test(split1)) {
    console.log("condition 2");
    return false
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}

//Third solution with everything in one line
function isValidEmail(email) {
  return /^[A-Za-z0-9\._,]+@[A-Za-z]+\.[A-Za-z]+$/.test(email);
}


isValidEmail("junk@gmail.com");
isValidEmail("now.what@now.co");
isValidEmail("my@website@gmail.com");
isValidEmail("anthony!@ladson.com");
