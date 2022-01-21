// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialCha = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
function generatePassword() {
  // Ask them how many they want
  var numCharacters = prompt("How many characters do you want in your password?")
  console.log(numCharacters)
  // Ask them if they want uppercase characters
  var includeUppers = confirm("Do you want to include uppercase letters?")
  var includeLowers = confirm("Do you want to include lowercase letters?")
  var includeSpecial = confirm("Do you want to include special characters?")
  var includeNum  = confirm("Do you want to include numbers?")
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
