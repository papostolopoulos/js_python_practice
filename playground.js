function mohammedsChallenge(money, haveTime){
  return money <= 10000 && haveTime >= 40 ? "Make some money first" : money <= 10000 && haveTime < 40 ? "Keep on working! More money needed" : money > 10000 && haveTime >= 40 ? "You have enough money. Time to code!" : "Keep writing code! You are doing it"
}
