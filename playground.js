function mohammedsChallenge(money, haveTime){
  return money <= 10000 && haveTime >= 40 ? "Make some money first" : money <= 10000 && haveTime < 40 ? "Keep on working! More money needed" : money > 10000 && haveTime >= 40 ? "You have enough money. Time to code!" : "Keep writing code! You are doing it"
}


function winLottery(){
  var userAnswer = prompt("Did you win the lottery ticket?");
  while (userAnswer.toLowerCase() !== "yes") {
    alert("Sorry, you have to keep on studying code or win the lottery");
    winLottery();
  }

  alert("Congratulations. You won the lottery so you can live a life in prosperity. Remember your good friend Paris and give him something.");
}

winLottery();
