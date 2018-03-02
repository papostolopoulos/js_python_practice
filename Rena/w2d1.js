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
	return sentence.replace(/I/g, "we").replace(/mine/g, "ours").replace(/my/g, "our").replace(/me/g, "us");
}
royalWe("I want to go to the store.");
royalWe("This is my house and you will respect me!");
royalWe("This is mine...");
royalWe("Jump for my love");


//Second optional answer: 
function royalWe(string){
//create an object:
	var newWordObj = {
		I: "we",
		mine: "ours",
		my: "our",
		me: "us"
	};

	var objKeys = Object.keys(newWordObj);

	var splitString = string.split(" ");

	for(var i = 0; i < splitString.length; i++){
		var word = splitString[i];

		for(var j = 0; j < objKeys.length; j++){
			if(word.includes(objKeys[j])){
			var wordOne = word.slice(0, word.indexOf(objKeys[j])) + newWordObj[objKeys[j]] + word.substring(word.indexOf(objKeys[j]) + objKeys[j].length)
			word = "pizza".slice();
				console.log(word.substring(word.indexOf(objKeys[j]), word.indexOf(objKeys[j]) + objKeys[j].length));
			}
		}
	}
	return splitString.join(" ");
}
// royalWe("I want to go to the store.");
// royalWe("This is my house and you will respect me!");
royalWe("This is mine...");
// royalWe("Jump for my love");

// for(var key in newWordObj){
	
// 	}
// 	console.log(newWordObj);
// }





/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

function elementCount(array){
//create an empty object variable:
	var countObj = {};
//looping through the array
	for(var i = 0; i < array.length; i++){
console.log(countObj);
console.log(array[i]);
//using bracket notation[] to use variable name:
console.log(countObj[array[i]]);
//if the value of the property is undefined, then
//create the property and give value of 1.
		if(countObj[array[i]] === undefined){
			countObj[array[i]] = 1;
		}
//if the property exists, then you add 1.
		else {
			countObj[array[i]] += 1;
		}
	}
	return countObj;
}
elementCount(["a", "a", "a", "b"]);


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
	console.log(newRange.reverse());
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

//Answer:
function magicNumbers(max){
	var newArray = [];

	for(var i = 0; i <= max; i++){
//identify i that is % by 4 OR % by 6:
		if(i % 4 === 0 || i % 6 === 0){
//identify i that is % by 4 AND % by 6:
			if(i % 4 === 0 && i % 6 === 0){
				continue;
			}
			newArray.push(i);
		}
	}
	console.log(newArray);
}
magicNumbers(20);


/*
Feedback from Rena
royalWe: Done.  However, still trying to understand for-in loop. I will do some
more reading on for-in loop, but can we review this again in group meeting?
Paris: Yes we can but please create a random object and see if you can iterate through
it and print its keys and its values

elementCount: I created an empty object inside my function, but still have
issues with my if-statements to get it to run properly.  However, I think I
should have nested if-statement to try and match key-value pair, correct?
Paris: No that is not the way. Your if statement is not going to help you at all the way it is.
In fact the comparison you do in the if statement is quite incorrect since you are comparing
and element to the whole array.
How can you ad properties in an object after you create it? That is the first thing you should
see if you know how to do. As practice, can you create an object and then add new properties to it?
How would you do that?

reverseRange: made correction; it should run properly now.

reverseSentence: Done.

magicNumbers: made correction; getting closer, but still have issue with if-statement.
Paris: Why are you stating in your if statements the modulo's remainder as 1 and not as 0?
Then you will not get the actual divisible numbers.

*/
