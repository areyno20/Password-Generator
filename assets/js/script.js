//Global Scope
var password = "";


//Function for character length and prompt window to give characters.
function passwordLength() {
  //prompt for password length
  var passwordNumber = Math.floor(Number(prompt("Please enter the number of characters for your desired password (Between 8 and 128)")));

  // Alert for invalid choice of number.
  if (passwordNumber < 8){
    alert("Not enough characters for password.")
    return passwordLength();
  }
  if (passwordNumber > 128){
    alert("Too many characters for password.")
    return passwordLength();
  }

  return passwordNumber;
}


//Function for determining the chosen characters for the password.
function charactersChosen() {
  var passwordChars = "";
  
  //Character set for chosen categories
  var lower= "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "~!#$%^&*()";

  //Prompt and confirmation of chosen character set
  var confirmlowercase = confirm("Will your password include lower case characters?");
  var confirmuppercase = confirm("Will your password include UPPER CASE characters?");
  var confirmnumbers = confirm("Will your password include Numb3r characters?");
  var confirmspecial = confirm("Will your password include $peci@l characters?");


  //If chosen category is true passwordChars will contain the character set
  if (confirmlowercase == true) {
   passwordChars += lower;
  }
  if (confirmuppercase == true) {
   passwordChars += upper;
  }
  if (confirmnumbers == true) {
   passwordChars += numbers;
  }
  if (confirmspecial == true) {
   passwordChars += special;
  }
  if (passwordNumber === null){
    return;
  }

  return passwordChars;
}


//Function for generating final password.
function passwordGenerate() {
  password = "";

  var length = passwordLength();
  var passwordChars = charactersChosen();

  var passwordCharsLength = passwordChars.length;

  for (var i = 0; i < length; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordCharsLength));
  }
  
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);