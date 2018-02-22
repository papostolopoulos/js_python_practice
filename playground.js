console.log(a);
b();
var a = "This is variable a";



function b (){
console.log("This is function b")
}


c(); //undefined
d(); //This is d

// Function declaration
function c(){
  console.log("This is c");
}

// Function expression
var d = function () {
  console.log("This is d");
}


var cookieMonster = {
  name: "Fred",
  self: this,
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
  isAllright: function(){
    setTimeout(function () {
      return "This is alright";
    }, 1000);
  },

  isAlrightMeal: function(food){
    var self = this;

    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);

      setTimeout(function () {
        var eatScore = self.eat(arguments[i]);
        console.log(self);
        console.log(self.eat);
        console.log(arguments[i]);
        console.log(eatScore);
        if (eatScore === 2) {
          console.log(self.name + " likes " + arguments[i] + ". Chocolate chip cookie important to me... OM NOM NOM NOM NOM");
        }
        if (eatScore === 1) {
          console.log(arguments[i] + "? Me love poetry, and cookies!");
        }
        if (eatScore === -1) {
          console.log(arguments[i] + " or cookie? ..." + arguments[i] + "...cookie. Me Cookie Monster! This is no-brainer!");
        }
        if (eatScore === -2) {
          console.log(arguments[i] + "? Me want cookie");
        }
      }, 1000);
    }
    return this.eat(food);
  }
};

setTimeout.bind(cookieMonster.isAlrightMeal)


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
