// Assignment code here

var passwordBase = [];

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = ['1','2','3','4','5','6','7','8','9'];

var special = ['!','$','%','&','*',];

//series of questions for what the user wants to include in password
function generatePassword () {
  var passwordLength = window.prompt("How many characters do you want your password to be? (Enter a number between 8 - 128)");
  console.log(passwordLength);
  if (passwordLength <8 || passwordLength >128) {
    window.alert ("Please select a number between 8 and 128")
    generatePassword()
  } else {
  promptLowercase()
  }

//uses the confirm alert to select okay or cancel which equals true or false
  function promptLowercase() {
    var userWantsLowercase = confirm ("Press okay to include lower case or cancel to not include")
    console.log(userWantsLowercase);
    if (userWantsLowercase === true){
        passwordBase = passwordBase.concat(lowerCase)
        console.log(passwordBase)
        promptUppercase()
    } else {
        promptUppercase()
    }
  }

  function promptUppercase() {
    var userWantsUppercase = confirm ("Press okay to include upper case or cancel to not include.")
    console.log(userWantsUppercase);
    if (userWantsUppercase === true) {
      passwordBase = passwordBase.concat(upperCase)
      console.log(passwordBase);
      promptNumbers ()
    } else {
      promptNumbers ()
    }
  }

  function promptNumbers () {
    var userWantsNumbers = confirm ("Press okay to include numbers or cancel to not include.")
    console.log(userWantsNumbers);
    if (userWantsNumbers === true) {
      passwordBase = passwordBase.concat(numbers)    
      console.log(passwordBase);
      promptSpecial ()  
    } else {
      promptSpecial ()
    }
  }

  function promptSpecial () {
    var userWantsSpecial = confirm ("Press okay to include special characters or cancel to not include.")
    console.log(userWantsSpecial);
    if (userWantsSpecial === true) {
      passwordBase = passwordBase.concat(special)
      console.log(passwordBase);
    }
  }

  console.log(passwordBase)
  console.log(passwordLength)
  passwordBase = passwordBase.join("")
  console.log(passwordBase)
  var finalPassword = ""
  for (var i =0; i< passwordLength; i++){
    finalPassword += passwordBase.charAt(Math.floor(Math.random() *passwordBase.length))
    console.log(finalPassword);
  }
  return finalPassword;
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