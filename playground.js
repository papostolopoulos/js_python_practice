// Write a function maxValue(array)
//that returns the largest value in the array.
// Assume array is an array of numbers.
// > maxValue([43, 12, 6, 2])
// 43
// > maxValue([])
// null
// > maxValue([-4, -10, 0.43])
// 0.43 */


function maxValue(array){
  var largestValue = -Infinity;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > largestValue) {
      largestValue = array[i]
    }
  }

  return largestValue;
}


function maxValue(array){
  return array.sort((a, b) => {
    a - b;
  })[array.length - 1];

}



function maxValue(array){
  var finalArr = array.sort(function(a, b){
    return a - b;
  });
  return finalArr[finalArr.length - 1];

}

function sumOfNPrimes(n) {
  
}





















function mohammedsChallenge(money, haveTime){
  return money <= 10000 && haveTime >= 40 ? "Make some money first" : money <= 10000 && haveTime < 40 ? "Keep on working! More money needed" : money > 10000 && haveTime >= 40 ? "You have enough money. Time to code!" : "Keep writing code! You are doing it"
}


function winLottery(){
  var userAnswer = prompt("Did you win the lottery ticket?");
  while (userAnswer.toLowerCase() !== "yes") {
    alert("Sorry, you have to keep on studying code or win the lottery");
    userAnswer = prompt("Did you win the lottery ticket?");
  }

  alert(`Congratulations. You won the lottery so you can live a life in prosperity.
  Remember your good friend Paris and give him something.`);
}

winLottery();
