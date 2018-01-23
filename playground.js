function isPrime(number){
 for(var i = 2; i < number; i++){
 	if(number % i === 0){
 		return false;
 	}
 }
 return true;
}
isPrime(303212);
isPrime(1693);


/* firstNPrimes
0. Using isPrime,
1. write a function firstNPrimes(n) OK
2. that returns an array OK
3. of the first n prime numbers.
> firstNPrimes(0)
[]
> firstNPrimes(1)
[2]
> firstNPrimes(4)
[2, 3, 5, 7] */




function firstNPrimes(n){
  var array = [];
  for (var i = 2; i < 10; i++) {
    if (isPrime(i) === true) {
      array.push(i);
    }
  }

  return array;
}




firstNPrimes(6);





























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
