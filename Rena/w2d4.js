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

console.log(foo); //What is foo on this line? --->Answer is: 5, referencing the value of foo
//before the function bar().

console.log(bar()); //What is bar() on this line? --->Answer is: Anthony.  Q: Why
//is the answer NOT 'Anthony is home' instead?
// Paris: Because you are not assigning the concatenation to any variable. So at the end
// the only thing that is returned is the variable 'foo'

console.log(foo); //What is foo on this line? --->Answer is: 5. Q: Why is it repeating
//same answer as 1st line?
// Paris: Because this is a question to confirm that you understand the global vs the local environment



//-------------------------------------------
var foo = 5;

function bar(foo){
  return foo + 65;
}

console.log(foo); //What is foo on this line?---> Answer is: 5, referencing the value of foo
//before the function bar().

console.log(bar(5)); //What is bar() on this line? --->Answer is 70, the value of 5 is
//being passed as parameter (foo) in function bar(); therefore returning the value of 5 + 65.

console.log(foo); //What is foo on this line? --->Answer is: 5. Q: Why is it repeating
//same asnwer as 1st line?
// Paris: Because this is a question to confirm you understand the difference between
// variables in different scopes as well as the parameters of a function


console.log(bar(5)); //What is bar() on this line? --->Answer is 70. Again, the value of 5 is
//being passed as parameter (foo) in function bar(); therefore returning the value of 5 + 65.
// Paris: for all these questions, you have to remember that variables have same
// names but are in a different lexical environment. That is why it is asking these
// questions. They are not the same questions, they are asking to see if you know what
// everything represents as the program is being read.

//-------------------------------------------

var foo = "Happy"; //Q: Is the for-loop taking
//the string length of 'Happy' as 5?  Why not
//list 'foo.length < 5' below?
// Paris: read my comments above. Same name of variable but different variable and with a different scope.
// Also foo.length < 5 is wrong. This would not result in an iteration.

for(var foo = 0; foo < 5; foo += 1){
  console.log(foo); //What will foo be on each iteration?
  //--->Answer: 0, 1, 2, 3, 4, 5. Will iterate thru
  //the for-loop up to 5.
}

console.log(foo); //What will foo be on this line? --> Answer: 6. Q: Is
//this because of '+=1' in the for-loop that gets the answer 6?
// Paris: Correct. The for loop is terminated after the += assignment operator

//------------------------------------

var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?
//--->ANSWER: 1: 5, it's a string plus the value.

function foo(){
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?
  //--->Answer: 3: 10, it's a string plus the value.

  var innerFoo = function(){
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line?
}//-->Answer: 4: 10, Q: Is this because the console.log is outside of innerFoo(),
//but within the function foo() code block?
// Paris: the value of bar is changed within the scope of innerFoo but this is a
// function expression and not a function declaration. Therefore innerFoo is still
// undefined and therefore the function never runs in order to change the value of
// bar.

console.log("2: " + bar); //2: What will bar be on this line? --> Answer: 2: 5, I think
//it runs outside of innerFoo() and foo() code blocks; which allows it to access
//var bar = 5.

foo(); // Q: I ran this code, it produces '3: 10' and '4: 10' as the answer, but
//I do not know why. Since it produces '4: 10', how can this reference innerFoo() as well?
// Paris: innerFoo is a variable that is never called so it does not affect anything

console.log("5: " + bar); //5: What will bar be on this line? -->Answer: 5: 5, it
//references var bar = 5, since it's outside of function foo() code block.

//-----------------------------------

var bar = "dance";

function foo(){
  bar = 10;

  var innerFoo = function(){
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line?-->Answer: 2: 10,  it
  //runs within the foo() code block, but I don't know why it ignores innerFoo().
  // Paris: because it is not a declaration, it is an expression. innerFoo is undefined

  innerFoo(); //-->Answer: This does nothing, why? Q: Is it because it's being
  //invokeed inside the same innerFoo() code block?
  // Paris: incorrect. A variable is being declared and given a value but it does not
  // have a return

  console.log("3: " + bar); //3: What will bar be on this line? -->Answer: 3: 10,
  // it runs within foo() code block and references var bar = 10 before the innerFoo()
  //code block.
  // Paris: Again, innerFoo does nothing other than the function expression
}

console.log("1: " + bar); //1: What will bar be on this line? -->Answer: 1: dance, it
//references var bar = dance, which is outside of foo() and innerFoo() code block.

foo(); // Do not know about this step!

console.log("4: " + bar); //4: What will bar be on this line? --> Answer: 4: 10, but I
//have no idea why, help! Q: This runs outside of foo() and innerFoo() code block, why is
//it not referencing 'dance'?
// Paris: Your answer is incorrect. It gives "4: dance"
// Same like line 131, it just logs the string + the value of the bar variable
// which is in the global scope.




/* Factorial
Write a function factorial(n), that returns the factorial of the number n.
Example: factorial(4) => 4 * 3 * 2 * 1 => 24*/
// factorial(1); //1
// factorial(4); //24
// factorial(5); //120
// factorial(10); //3628800


//factorials: multiply that number by each number between itself and one.
function factorial(n){
//need if-statement to determine if factorial is equal to 0.
  if(n === 0){
    return 1;
  }
// else return the number between itself and then subtract 1.
 return n * factorial(n - 1);
}

factorial(1);
factorial(4);
factorial(5);
factorial(10);


/* Long Word Count
Write a function longWordCount(string) that takes in a string and returns
the number of words longer than 7 characters. */
// longWordCount(""); //0
// longWordCount("short words only"); //0
// longWordCount("one reallylong word"); //1
// longWordCount("two reallylong words inthisstring"); //2
// longWordCount("allwordword longwordword wordswordword"); //3
// longWordCount("seventy schfifty five"); //1


function longWordCount(string){
  var count = 0;
  var newString = string.split(' ');
  // console.log(newString)
  var stringChar = 7;

  for(var i = 0; i < newString.length; i++){
    // console.log(newString[i]);
//if length of the element in array(string) is larger
//than stringChar, then increment count by 1.
    if(stringChar < newString[i].length){
        count++;
    }
  }
  return count;
}
longWordCount("allwordword longwordword wordswordword");
longWordCount("two reallylong words inthisstring");


/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which
is a multiple of both inputs. */
// lcm(2, 3); //6
// lcm(6, 10); //30
// lcm(24, 26); //312

function lcm(num1, num2){
 var sumNum = num1 * num2;
//  console.log(sumNum);
  //Using Math.min() returns the lowest number:
    if(sumNum % num1 !== 0 && sumNum % num2 !== 0){
      // console.log(Math.min(num1, num2));
      return Math.min(sumNum);
    }
  }
  lcm(24, 26);
  lcm(2, 3);


//Answer provided by Paris:
  function lcm(num1, num2) {
  if ((num1 === 2 || num2 === 2) || (num1 === 1 || num2 === 1)) return num1 * num2;

  if (num1 % 2 === 0) return (num1 / 2) * num2;

  if (num2 % 2 === 0) return (num2 / 2) * num1;

  if (num1 % 2 !== 0 && num2 % 2 !== 0) return num1 * num2;
}
 lcm(24, 26);
  lcm(2, 3);

/* Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel. */
// hipsterfy("proper"); //"propr"
// hipsterfy("proper tonic panther"); //"propr tonc panthr"
// hipsterfy("towel flicker banana"); //"towl flickr banan"
// hipsterfy("runner anaconda"); //"runnr anacond"
// hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"


function hipsterfy(sentence){

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var sentArr = sentence.split(' ');
//iterate through the array:
  for(var i = 0; i < sentArr.length; i++){
    var word = sentArr[i];
    // console.log(word);
  //iterate through the element itself:
  // for(var j = 0; j < word.length; j++)

  //reverse forloop, start from the back of string:
  // j >=0, you want to get to index 0 by iterating
  //from largest index position to lowest.
    for(var j = word.length - 1; j >= 0; j--){
        // console.log(word[j]);
        if(vowels.indexOf(word[j]) !== -1){
            // console.log(word[j]);
            // word.replace(word.substring(j, j+1), "");
            sentArr[i] = word.slice(0, j) + word.slice(j+1);
            console.log(word);
            break;
        }
    }

  }
 return sentArr.join(' ');
}
hipsterfy("turtle cheeseburger fries");
hipsterfy("runner anaconda");



//Alternative Answers:

//ES6
function hipsterfy(sentence){
  return sentence.split(" ").map((el) => el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("")).join(" ");
}


//ES5
function hipsterfy(sentence){
  var sentenceArr = sentence.split(" ");
  var newSentence = sentenceArr.map(function(el) {
    return el.split("").reverse().join("").replace(/[aeiou]/, "").split("").reverse().join("");
  });
  return newSentence.join(" ");
}


hipsterfy("proper"); //"propr"
hipsterfy("proper tonic panther"); //"propr tonc panthr"
hipsterfy("towel flicker banana"); //"towl flickr banan"
hipsterfy("runner anaconda"); //"runnr anacond"
hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"






var str = "Hello, hello, I think I like you. hello, Hello"

console.log(str.replace(/hello/g, "Goodbye"));
console.log(str.replace(/hello/gi, "Goodbye"));
console.log(str.replace("hello", "Goodbye"));



/*NOTES from Rena:

1) Already read your comments and went through code again.

2) For factorial(n): I think this works!

3) function longWordCount(string):  I tried a different route to solve it, but I am having issues evaluating
if the sentence is greater than 7 characters. I don't think I understand
how to incorporate count in my code, can we review?

4) function lcm:  I re-wrote my code, but I think it's still partly wrong. It's returning the lowest number 
in the first version of answer, but I think line 210 is incorrect. For second version, it returns undefined and I think
my if-statement is incorrect.  Between the two versions, which one is closer to me being on the right track to solve it?

5) function hipsterfy(sentence) - I tried to use the .indexOf() method, but I think I am using it incorrectly. I went
to MDN and was able to understand some of the examples - but when I attempted it with my code, it does not work. 
What am I missing?

/*

/*Comments from Paris:
factorial: You are using recursion. We never talked about recursion so I assume
this is something that you found online. If I ask you to, would you be able to
explain your solution and how it works?
Also there is no request in the problem to specially handle the parameter when n = 0

longWordCount: Please read the problem again. It wants you to count the words that are long,
not return the string

lcm: the if statement on line 205 will always return false. Can you guess why?
What is wrong with what you are trying to compare with the comparison operators?

hipstrfy: the method you are probably looking for is .indexOf(). Give it some thought
*/
