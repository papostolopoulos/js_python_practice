function dynamicFizzBuzz(max, num1, num2) {
  var i = -1;

  while (i <= max) {
    i++;
    if(i % num1 === 0 || i % num2 === 0) {
      if (i % num1 === 0 && i % num2 === 0) {
        continue;
      }
      console.log(i);
    }
  }
}

function dynamicFizzBuzz(max, num1, num2) {
  var i = 0;
  while (i <= max) {
    if ( (i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0) ) {
      console.log(i);
    }
    i++;
  }
}


function dynamicFizzBuzz(max, num1, num2) {
  for (var i = 0; i <= max; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      if (i % num1 === 0 && i % num2 === 0) {
        continue;
      }
      console.log(i);
    }
  }
}


var cookieMonster = {
  name: "Fred",
  foods: {
    awesomeFoods: ["cookies", "milk"],
    goodFoods: ["pizza", "banana", "apple"],
    badFoods: ["salad", "cheese"],
    hatedFoods: ["spinach", "brocolli"]
  },
  eat: function(food){
    console.log("Hello, my name is " + this.name + " and I like " + food);
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
