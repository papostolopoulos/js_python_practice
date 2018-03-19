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

console.log(foo); //What is foo on this line? --->Answer is: 5. Q: Why is it repeating
//same answer as 1st line?

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

console.log(bar(5)); //What is bar() on this line? --->Answer is 70. Q: Why is it repeating again?

//-------------------------------------------

var foo = "Happy"; //Q: Is the for-loop taking
//the string length of 'Happy' as 5?  Why not
//list 'foo.length <= 5' below?

for(var foo = 0; foo <= 5; foo += 1){
  console.log(foo); //What will foo be on each iteration?
  //--->Answer: 0, 1, 2, 3, 4, 5. Will iterate thru
  //the for-loop less/equal to 5.
}

console.log(foo); //What will foo be on this line? --> Answer: 6. Q: Is 
//this because of '+=1' in the for-loop that gets the answer 6?

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

console.log("2: " + bar); //2: What will bar be on this line? --> Answer: 2: 5, I think
//it runs outside of innerFoo() and foo() code blocks; which allows it to access
//var bar = 5. 

foo(); // Q: I ran this code, it produces '3: 10' and '4: 10' as the answer, but
//I do not know why. Since it produces '4: 10', how can this reference innerFoo() as well?

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

  innerFoo(); //-->Answer: This does nothing, why? Q: Is it because it's being
  //invokeed inside the same innerFoo() code block?

  console.log("3: " + bar); //3: What will bar be on this line? -->Answer: 3: 10,
  // it runs within foo() code block and references var bar = 10 before the innerFoo()
  //code block.
}

console.log("1: " + bar); //1: What will bar be on this line? -->Answer: 1: dance, it
//references var bar = dance, which is outside of foo() and innerFoo() code block.

foo(); //

console.log("4: " + bar); //4: What will bar be on this line? --> Answer: 4: 10, but I
//have no idea why, help! Q: This runs outside of foo() and innerFoo() code block, why is
//it not referencing 'dance'?




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
//looping thru string to determine length:
  for(var i = 0; i < string.length; i++){
    // console.log(string[i]);
    if(string.length > 7){
      return string;
    }
    return "String is too short."
  }
}
longWordCount("allwordword longwordword wordswordword");



/* Least Common Multiple
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs. */
// lcm(2, 3); //6
// lcm(6, 10); //30
// lcm(24, 26); //312

function lcm(num1, num2){

}
lcm(2, 3);


/* Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input.
Remove the last vowel from each word. 'y' is not a vowel. */
// hipsterfy("proper"); //"propr"
// hipsterfy("proper tonic panther"); //"propr tonc panthr"
// hipsterfy("towel flicker banana"); //"towl flickr banan"
// hipsterfy("runner anaconda"); //"runnr anacond"
// hipsterfy("turtle cheeseburger fries"); //"turtl cheeseburgr fris"



/*NOTES from Rena:

1) Please see code for 1st half of exercises. I ran the various exercises, but have questions
regarding the results, which are listed in the code block itself.

2) For factorial(n): I think this works!

3) function longWordCount(string):  It works, but it only returns the actual string itself if it's greater
than 7 characters. I am not getting the the number of words...still trying to debug.
trying to debug.

4) function lcm - still working on this!

5) function hipsterfly(sentence) - will work on this next.

/*