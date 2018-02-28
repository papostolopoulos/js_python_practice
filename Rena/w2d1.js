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

//Firstoptional answer: This works fine!
function royalWe(sentence){
//use. replace() to replace one word at a time:
	var newString = sentence.replace(/I/g, "we").replace(/mine/g, "ours").replace(/my/g, "our").replace(/me/g, "us");
	console.log(newString);
}
royalWe("I want to go to the store.");
royalWe("This is my house and you will respect me!");
royalWe("This is mine...");
royalWe("Jump for my love");


//Second optional answer: Still trying to debug.
var newWordObj = {
	I: "we",
	mine: "ours",
	my: "our",
	me: "us"
};

function royalWe(sentence){
	var newString = sentence.replace(/I|mine|my|me/g, function(word){
		return newString[word];
	});
}

// royalWe("I want to go to the store.");
// royalWe("This is my house and you will respect me!");
// royalWe("This is mine...");
royalWe("Jump for my love");




/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

//Still needs to debug some more:
function elementCount(array, word){
	var countObj = [];
//looping through the array
	for(var i = 0; i < array.length; i++){
//compare if element in array equals to word:
		if(array[i] === word){
			console.log("b: " + countObj);
		}
		if(array[i] === word){
			console.log("a: " + countObj);
		}
		countObj++
	}
}
elementCount(["a", "a", "a", "b"], "a");
elementCount(["a", "a", "a", "b"], "b");


/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.

** Examples:
** reverseRange(2, 7) //=> [ 6, 5, 4, 3 ]
** reverseRange(4, 2) //=> []
*/

function reverseRange(start, end){
	var newRange = [];

	for(var i = start; i < end; i++){
		newRange.push(i);
	}
	console.log(newRange);
}

reverseRange(2, 7);
reverseRange(4, 2);

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed.

** Examples:
** reverseSentence("Go to the store") \\=> "store the to Go"
** reverseSentence("Jump, jump for joy") \\=> "joy for jump Jump,"
*/

function reverseSentence(sentence){
 var newSentence = sentence.split(" ");
 newSentence.reverse().toString();

 console.log(newSentence.join(" "));
}

reverseSentence("Go to the store");
reverseSentence("Jump, jump for joy");

/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

** Example:
** magicNumbers(20) \\=> [ 4, 6, 8, 16, 18, 20 ]
*/

//Still trying to debug:
function magicNumbers(max){
	var newArray = [];

	for(var i = 0; i <= max.length; i++){
		// console.log(i); // I keep getting undefined?
//identify i that is % by 4 OR % by 6:
		if(i % 4 === 0 || i % 6 === 0){
//identify i that is % by 4 AND % by 6:
			if(i % 4 === 0 && i % 6 === 0)
			continue;
		}
		newArray.push(i);
	}
}

magicNumbers(20);


/*
Feedback from Paris
royalWe: PERFECT, NEAT AND QUICK - Thank you

elementCount: You need to create an empty object inside your function, not an
empty array.
After that, how would you start adding things in your object? Can you think of a way?
The way that you try to invoke the function at the end is incorrect. There is only
one argument in the function and that is an array of letter elements.

reverseRange: Not quite correct but close. You are printing an array like
[2,3,4,5,6] while it should be RETURNING [6,5,4,3]

reverseSentence: VERY GOOD!

magicNumbers: max.lenght???


*/
