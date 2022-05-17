// Assignment code here

var passwordLength = [];
console.log(passwordLength);

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(lowerCase);

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(upperCase);

var passwordNumeric = ['1','2','3','4','5','6','7','8','9'];
console.log(passwordNumeric);

var passwordCharacters = ['!','$','%','&','*',];
console.log(passwordCharacters);

function generatePassword () {
  var passwordLength = window.prompt("How many characters do you want your password to be? (Enter a number between 8 - 128)");
  console.log(passwordLength);

  var lowerCase = window.prompt ("Do you want to lower case text? (Enter yes or no)");
  console.log(lowerCase);

  var upperCase = window.prompt ("Do you want to include upper case text? (Enter yes or no)");
  console.log(upperCase);

  var passwordNumeric = window.prompt ("Do you want to include numbers? (Enter yes or no)");
  console.log(passwordNumeric);

  var passwordCharacters =window.prompt ("Do you want to include special characters? (Enter yes or no)");
  console.log(passwordCharacters);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
