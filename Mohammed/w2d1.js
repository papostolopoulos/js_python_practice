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

for ( var i = start; i < end; i++)
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
