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
//If it .includes() then
//where does this word reside .indexOf("I") 
// slice string (or substring) + new string

function royalWe(string){
	var newWordObj = {
		I: "we",
		mine: "ours",
		my: "our",
		me: "us"
	};
//The Object.keys() method returns an array of 
//a given object's own enumerable (keys) properties.
	var objKeys = Object.keys(newWordObj);
	var splitString = string.split(" ");

	for(var i = 0; i < splitString.length; i++){
  //splitString[i] is the value of the element in the array:
		var word = splitString[i];
  //looping through the properties of the array of objects: 
		for(var j = 0; j < objKeys.length; j++){
// use word.includes() method to determine if elements of the array of objects:
			if(word.includes(objKeys[j])){
//.slice method to start at index 0, then object and object keys and then use .slice method to get remaining ...
			splitString[i] = word.slice(0, word.indexOf(objKeys[j])) + newWordObj[objKeys[j]] + word.slice(word.indexOf(objKeys[j]) + objKeys[j].length);
				// console.log(word.substring(word.indexOf(objKeys[j]), word.indexOf(objKeys[j]) + objKeys[j].length));
			}
		}
	}
	return splitString.join(" ");
}
royalWe("This is mine...");
// royalWe("I want to go to the store.");
// royalWe("This is my house and you will respect me!");
// royalWe("Jump for my love");



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
// console.log(countObj);
// console.log(array[i]);
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
royalWe: Done and added second optional answer for records. 

elementCount: Done 

reverseRange: made correction; it should run properly now.

reverseSentence: Done.

magicNumbers: Done

*/
