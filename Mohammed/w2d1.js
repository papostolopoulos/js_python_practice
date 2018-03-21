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
function royalWe(sentence){
  var words = sentence.split(" ");
    for ( word in words){
      if(words[word] === "I"){
        words[word] = "we";
      } else if (words[word] === "my"){
          words[word] = "our";
      } else if (words[word] === "me") {
          words[word] = "us";
      } else if (words[word] === "mine") {
          words[word] = "ours";
    } else {
      words[word]
    }
  }
  return words.join(" ");
}

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

function elementCount(array){
  var obj = {};
array.forEach(function(properties, values){
    obj[properties] = values
});
  return obj
}
//   @PARIS my output is Object {a: 2, b: 3} which are the total indecies.
// now I need something in line 45 that count { maybe itirate again not sure}


/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.

** Examples:
** reverseRange(2, 7) //=> [ 6, 5, 4, 3 ]
** reverseRange(4, 2) //=> []
*/
function reverseRange(start, end){

//var range = math.range(start, end); I spent so much time to figure out how to do newRange
// I am very surpised that there are no stright forward method for range. I try _.range and math.newRange
// all didn't work so I am just doing etration insdead
var range =[];

for ( var i = start +; i < end; i++)
    range.push(i);
	  return (range.reverse());
}

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed.

** Examples:
** reverseSentence("Go to the store") \\=> "store the to Go"
** reverseSentence("Jump, jump for joy") \\=> "joy for jump Jump,"
*/
function reverseSentence(sentence){

  var splitSentence = sentence.split(" ");
  var reverseSentence = splitSentence.reverse();
  return reverseSentence.join(" ");

}
/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

** Example:
** magicNumbers(20) \\=> [ 4, 6, 8, 16, 18, 20 ]
*/

function magicNumbers(max) {

  var maxNum =[];
  for ( var i = 0; i <= max; i++){
   if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0)){
      maxNum.push(i)
    }
  }
  return maxNum;
}

/*Feedback for Mohammed
1) royalWe - You do not need the "else" because it does not do anything
The if statements need improvement. For example, royalWe("This is mine...") does
not change "mine" to "ours" because you try to find and identical match with the
comparison operator (===). What method can you use to see if the element "contains"
the word you try to change? How can you change it after that?

1) Answer: I tried .match()
-------------------
1) for in is a for loop that works better with objects. Try the "for of" loop or
a simple for loop.
------------------------------------------------------------------------





2) elementCount - You have created an empty object (var obj = {}). I will type
a description for you so you can try to figure it out.
question 1: if you have an empty object and you type obj.a, what is the value you get?

Answer 1: undefined

question 2: how can you add a new property in an object and give it a value?

Answer 2: object[prop]= value

question 3: Why are you naming in the forEach method the parameters (properties, values)?
Do you know what they represent?

Answer 3: to iturate through an array the forEach method is a built in fuction that carry up
to 3 parapaters ( elements, index, array ), I should just named them elements instead of properties
and values should be named index
-----------------------
2)
//if the object does not have this property then create it with a value of 1,
//otherwise add one to the existing property
if(obj[property] === undefined){
  obj[property] = 1;
}
else{
obj[property] += 1;
}





3) reverseRange - There is no range() in JavaScript but some libraries have it. Your function
is 90% correct because you define var i = start and therefore the start number is
included while it should not.
Alternative solution:
for (var i = end - 1; i > start; i--) {range.push(i)}
Alternative solution 2:
for (var i = start + 1; i < end; i++) {range.unshift(i)}

Answer - I through about it before and tried to add + then for somereason it went to infite loop.
----------------
You have a syntax error in your code because you are missing the brackets {} in
your for loop. Also since you are using this for loop, you should not .push but
.unshift
*/
