/* isValidEmail:
Write a function isValidEmail(email) that takes an email string.
Return true if the email is considered valid. A valid email:
1. Contains one and only one "@" symbol
2. All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
3. There is one and only one dot "." after the "@" symbol
4. Besides the dot ".", all the characters after the "@" are in the alphabet
(no numbers or underscores)
Feel free to use these arrays in your solution:

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];*/
// isValidEmail("junk@gmail.com"); //--> true
// isValidEmail("now.what@now.co"); //--> true
// isValidEmail("i_am_happy@feelings.net"); //--> true
// isValidEmail("my@website@gmail.com"); //--> false
// isValidEmail("webby@gmail.co.net"); //--> false
// isValidEmail("anthony@ira_ladson.com"); //--> false
// isValidEmail("anthony!@ladson.com"); //--> false

function isValidEmail(email) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphanumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","_","."];
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  for (var i = 0; i < split1.length; i++) {
    if (alphanumeric.indexOf(split1[i]) === -1) {
      console.log("condition 2");
      return false;
    }
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}

//Second solution with RegEx for each condition
function isValidEmail(email) {
  var splitEmail = email.split("@");
  var split1 = splitEmail[0];
  var split2 = splitEmail[1];


  //Condition 1
	var x = email.match(/@/g);
	if(x.length > 1) {
    console.log("condition 1");
    return false;
  }

  //Condition 2
  if (!/^[A-Za-z0-9\._,]+$/.test(split1)) {
    console.log("condition 2");
    return false
  }

  //Condition 3
  if (split2.match(/\./g).length > 1){
    console.log("condition 3");
    return false;
  }

  //Condition 4
  if (/^[a-z]+\.[a-z]+$/.test(split2) === false) {
    console.log("condition 4");
    return false;
  }


	return true;
}

//Third solution with everything in one line
function isValidEmail(email) {
  return /^[A-Za-z0-9\._,]+@[A-Za-z]+\.[A-Za-z]+$/.test(email);
}


isValidEmail("junk@gmail.com");
isValidEmail("now.what@now.co");
isValidEmail("my@website@gmail.com");
isValidEmail("anthony!@ladson.com");
