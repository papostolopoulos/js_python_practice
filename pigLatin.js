/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:
1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray
2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"
!!! Words that were originally caplitailzed must remain caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel
Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay
> inPigLatin("let us Dance")
etlay usyay Anceday
> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/

function inPigLatin(sentence) {
  var wordsArr = sentence.split(" ");

  for (var j = 0; j < wordsArr.length; j++) {
    var word = wordsArr[j];
    // console.log("Iteration we are going through:", j);
    // console.log("wordsArr[j] (word):", word);

    for (var i = 0; i < word.length; i++) {
      //CHECK IF THE FIRST LETTER IS A VOWELN AND PUT YAY AT END
      if ("aeiou".indexOf(word[0].toLowerCase()) !== -1) {
        wordsArr[j] = word + "yay";
        break;
      }

      // FIND THE VOWEL INSIDE THE WORD AND SLICE THERE. PUT 'AY; AT THE END
      // THE FIRST LETTER IS NOT AN UPPERCASE
      if ("aeiou".includes(word[i])) {
        if (word[0] !== word[0].toLowerCase()) {
          //THE FIRST LETTER IS AN UPPERCASE
          //I need to make the first letter an upperCase after
          //I move letters arround
          wordsArr[j] = word.slice(i, i+1).toUpperCase() + word.slice(i+1) + word.slice(0, i).toLowerCase() + "ay";
          break;
        }
        else {
          wordsArr[j] = word.slice(i) + word.slice(0, i) + "ay";
          // console.log("wordsArr[j] is", wordsArr[j]);
          // console.log("word is", word);
          break;
        }
      }

    }

  }
  console.log(wordsArr.join(" "));
  return wordsArr.join(" ");
}

// inPigLatin("chapter pig Apple"); // --> apterchay igpay
inPigLatin("Shmanthony is the best teacher")
