// NOTES:
//What is the Least Common Multiple?
// If you have ever found a common denominator for two or more fractions, you have found a common multiple. 
//For example, if you want to add 3/8 and 5/12, you must find a common denominator. A common denominator, 
//which is another name for common multiple, is a number that is a multiple for all the numbers being considered. 
//For example, a common multiple for 8 and 12 is 24. This means that there is an integer times 8 that will make
// 24 and there is an integer times 12 that will make 24. Going through the 8 time tables, 8 x 3 = 24 and going 
//through the 12 time tables, 12 x 2 = 24.

// These are not the only common multiples for 8 and 12, however. There are countless more. For example, 72 
//is another common multiple because 8 x 9 = 72 and 12 x 6 = 72. The number 24, however, is special because it 
//is the smallest or lowest or least common multiple for 8 and 12. The number 24 is called the least common
// multiple, abbreviated LCM, for 8 and 12.

// Listing Multiples
// The simplest method to find an LCM is to simply list the multiples from the time tables. For example, to find 
//the LCM for 6, 4, and 3 I could list the multiples for all three numbers until I see the same number in all three lists.

// Multiples of 6: 6, 12, 18, 24, 30

// Multiples of 4: 4, 8, 12, 16, 20, 24

// Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24

// For the multiples listed, there are two numbers that occur in both lists: 12 and 24. To find the LCM, pick the 
//smallest number. The LCM must be 12.


function lcm(num1, num2) {
  var leastMultiple = num1 * num2;
  while(leastMultiple % num1 === 0 && leastMultiple % num2 === 0){
    leastMultiple /= 2;
  }
  return leastMultiple * 2;
}




var vowels = 'aeiou';
var name = 'Paris';
var result = name;

for (var j = name.length -1; j >= 0; j--){
	for (var i = 0; i < vowels.length; i ++){
		if(vowels[i] === name[j]){
			result = name.substring(0, j) + name.substring(j + 1);
			console.log("Result: ", result);
			break;
		}
	}
	if (result !== name) {
		console.log("inside second if statement", result, name)
		break;
	}
}