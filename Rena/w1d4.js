
var cookieMonster = {
  name: "Fred",
  foods: {
    awesomeFoods: ['cookies', 'milk'],
    goodFoods: ['pizza', 'banana', 'apple'],
    badFoods: ['salad', 'cheese'],
    hatedFoods: ['spinach', 'brocolli']
  },
  //create scores object:
  scores: {
    awesomeFoods: 2,
    goodFoods: 1,
    badFoods: -1,
    hatedFoods: -2
  },
  //create text object:
  text: {
    awesomeFoods: " likes " + "Chocolate chip cookie important to me...OM NOM NOM NOM NOM",
    goodFoods: " ? Me love poetry, and cookies!",
    badFoods: " or cookie?..." + " ...cookie..Me Cookie Monster! This is no-brainer!",
    hatedFoods: " ? Me want cookie"
  },
//the eat method:
  eat: function() {
    var foodScore = 0;
//an Array of arguments; the arguments
//are being passed to the eat function.
    var args = Array.from(arguments);
    // console.log(args);

//looping through the arguments:
  for(var i = 0; i < args.length; i++){
//Note: 'this' represents cookieMonster,
//use the .includes() method to find out if argument
//contains the foods passed in as parameters.
// 'this' refers to the whole CookieMonster object and assigns a score:
      if(this.foods.awesomeFoods.includes(args[i])){
      foodScore = foodScore + this.scores.awesomeFoods; // addresses awesomeFoods array.
      }
      if(this.foods.goodFoods.includes(args[i])){
        foodScore = foodScore + this.scores.goodFoods;// addresses goodFoods array.
      }
      if(this.foods.badFoods.includes(args[i])){
        foodScore = foodScore + this.scores.badFoods;// addresses badFoods array.
      }
      if(this.foods.hatedFoods.includes(args[i])){
        foodScore = foodScore + this.scores.hatedFoods;// addresses hatedFoods array.
      }
  }
    return foodScore;
  },

//the isAlrightMeal function:
isAlrightMeal: function(){
  var responseList = '';
//create another var args; the arguments are being
//passed to isAlrightMeal function:
  var args = Array.from(arguments); 

//looping through the arguments but refers i in above forloop:
  for(var j = i; j < args.length; j++){ //this might be an issue??
    // console.log(i);
//'this' refers to cookieMonster object and refers to .eat function.
//'this' refers to cookieMonster object assigns text based on score.
    if(this.eat(args[i]) <= this.scores.awesomeFoods){
      responseList = this.name + this.text.awesomeFoods;
    }
    if(this.eat() <= this.scores.goodFoods){
      responseList = this.food.goodFoods + this.text.goodFoods;
    }
    if(this.eat() >= this.scores.badFoods){
          responseList = this.food.badFoods + this.text.badFoods;
    }
    if(this.eat() >= this.scores.hatedFoods){
      responseList = this.food.hatedFoods + this.text.hatedFoods;
    }
  }
  return responseList;
  }
};

cookieMonster.eat("cookies", "milk", "cheese");




//------------------------------------//
//            Week 1 Day 4            //
//------------------------------------//

//  Cookie Monster Project

// Create an object that is called cookieMonster.
// The object should have:
// - A property called "name" with a value that equals to Fred.
// - A property that is called "foods" and values to a new object.
// This object should have the following key value pairs:
//   - awesomeFoods with an array that has values "cookies" and "milk"
//   - goodFoods with an array that has values "pizza", "banana", "apple"
//   - badFoods with an array that has values "salad", "cheese"
//   - hatedFoods with an array that has values "spinach", "brocolli"
// - A method called "eat" that takes has one parameter (food).
// This method needs to return a final score that is calculated based on the types of
// foods entered as arguments.
// There can be one or more arguments entered in the method each time it is run.
//   - The method needs to run through all the arguments and see if they are included
//   in the list of foods in the different categories.
//   - If the argument's value is included in any of the above categories, then it
//   should provide the following score:
//   +2 for an awesome food
//   +1 for a good food
//   -1 for a bad food
//   -2 for a hated food
// - A method called isAlrightMeal that does the following:
//   It needs to iterate through all the foods entered as arguments and print
//   the following strings for each one of them.
//   - For an awesome food Fred should respond: "(name) likes (food). Chocolate chip
//   cookie important to me... OM NOM NOM NOM NOM"
//   - For an alright food Fred should respond: "(food)? Me love poetry, and cookies!"
//   - For a bad food Fred should respond: "(food) or cookie?...(food)...cookie
//   Me Cookie Monster! This is no-brainer!"
//   - For hated foods Fred should respond: "(food)? Me want cookie"
//   These strings should be displayed in the console with a delay of one second each
//   At the end, there should be a string returned which should read as the following:
//   - If the score from the eat method is larger than two, then Fred should say:
//   "Me liked food. Me eat a cookie for you!"
//   - if the score is lower than three then Fred should say:
//    - "(name) did not like food. (name) wants to eat cookie!"
