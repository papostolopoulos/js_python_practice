/** Write a function #royalWe(sentence) that returns an string where every 'I'
** is replaced with 'we', every 'mine' is replaced with 'ours', every 'my' is replaced with 'our',
** and every 'me' is replaced with "us".

** Examples:
** royalWe("I want to go to the store.") //=> "we want to go to the store."
*/
//If it .includes() then
//where does this word reside .indexOf("I") 5
// slice string (or substring) + new string

function royalWe(string){
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










var cookieMonster = {
  name: "Fred",
  foods: {
    awesomeFoods: ["cookies", "milk"],
    goodFoods: ["pizza", "banana", "apple"],
    badFoods: ["salad", "cheese"],
    hatedFoods: ["spinach", "brocolli"]
  },
  eat: function(food){
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
      if (this.foods.awesomeFoods.includes(arguments[i])) {
        result += 2;
      }
      if (this.foods.goodFoods.includes(arguments[i])) {
        result += 1;
      }
      if (this.foods.badFoods.includes(arguments[i])) {
        result -= 1;
      }
      if (this.foods.hatedFoods.includes(arguments[i])) {
        result -= 2;
      }
    }
    return result;
  },
  isAlrightMeal: function(food){
    var self = this;
    var args = Array.from(arguments) //["banana", "cookies", "milk", "salad"]
    var counter = 0;

    var intervals = setInterval(function () {
      if (self.eat(args[counter]) === 2) {
        console.log(self.name + " likes " + args[counter] + ". Chocolate chip cookie important to me... OM NOM NOM NOM NOM");
      }
      if (self.eat(args[counter]) === 1) {
        console.log(args[counter] + "? Me love poetry, and cookies!");
      }
      if (self.eat(args[counter]) === -1) {
        console.log(args[counter] + " or cookie? ..." + args[counter] + "...cookie. Me Cookie Monster! This is no-brainer!");
      }
      if (self.eat(args[counter]) === -2) {
        console.log(args[counter] + "? Me want cookie");
      }


      if (counter === args.length - 1) {
        setTimeout(function () {
          if (self.eat(...args) > 2) {
            console.log("Me liked food. Me eat a cookie for you!");
          }
          else {
            console.log(self.name + "  did not like food." + self.name + " wants to eat cookie!");
          }
        }, 2000);

        clearInterval(intervals);
      }
      counter++
    }, 2000);

  }
};



// - A method called "eat" that takes one parameter (food).

/*
Study the following:
1) arguments in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
2) The "this" keyword
*/


// cookieMonster.foods.goodFoods;
// ["pizza", "banana", "apple"]
// cookieMonster["foods"]["goodFoods"];
// ["pizza", "banana", "apple"]
// cookieMonster.foods["goodFoods"];
// ["pizza", "banana", "apple"]
// cookieMonster["foods"].goodFoods;
// ["pizza", "banana", "apple"]
//------------------------------------//
//            Week 1 Day 4            //
//------------------------------------//

/* Cookie Monster Project

Create an object that is called cookieMonster.
The object should have:
- A property called "name" with a value that equals to Fred.
- A property that is called "foods" and values to a new object.
This object should have the following key value pairs:
  - awesomeFoods with an array that has values "cookies" and "milk"
  - goodFoods with an array that has values "pizza", "banana", "apple"
  - badFoods with an array that has values "salad", "cheese"
  - hatedFoods with an array that has values "spinach", "brocolli"
- A method called "eat" that takes one parameter (food).
This method needs to return a final score that is calculated based on the types of
foods entered as arguments.
There can be one or more arguments entered in the method each time it is run.
  - The method needs to run through all the arguments and see if they are included
  in the list of foods in the different categories.
  - If the argument's value is included in any of the above categories, then it
  should provide the following score:
  +2 for an awesome food
  +1 for a good food
  -1 for a bad food
  -2 for a hated food
- A method called isAlrightMeal that does the following:
  It needs to iterate through all the foods entered as arguments and print
  the following strings for each one of them.
  - For an awesome food Fred should respond: "(name) likes (food). Chocolate chip
  cookie important to me... OM NOM NOM NOM NOM"
  - For an alright food Fred should respond: "(food)? Me love poetry, and cookies!"
  - For a bad food Fred should respond: "(food) or cookie?...(food)...cookie
  Me Cookie Monster! This is no-brainer!"
  - For hated foods Fred should respond: "(food)? Me want cookie"
  These strings should be displayed in the console with a delay of one second each
  At the end, there should be a string returned which should read as the following:
  - If the score from the eat method is larger than two, then Fred should say:
  "Me liked food. Me eat a cookie for you!"
  - if the score is lower than three then Fred should say:
  - "(name) did not like food. (name) wants to eat cookie!"
