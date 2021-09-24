// Assignment Code
var generateBtn = document.querySelector("#generate");
var loweralpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperalpha = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = [
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


function passwordOptions() {
  var length = window.prompt("The length of the passward?")
  if (length < 8 || length > 128) {
    alert("password has to be at least 8 characters and no more than 128 characters");
    return null;
  }

  var hasUpper = window.confirm("Uppercase letters?")
  var hasLower = window.confirm("How about lowercase ones?")
  var hasNumber = window.confirm("Including numbers?")
  var hasSpec = window.confirm("What about speical characters?")
  
  if (hasUpper===false && hasLower ===false && hasNumber === false && hasSpec === false){
    alert("You gotta pick at least one of them!");
    return null
  }

  var options = {
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpec
  }
  return options;
}


function generatePassword() {
  var options = passwordOptions();
  var possibleChar = [];
  var results = [];

  if(options.hasUpper==true){
    for (let index = 0; index < options.length; index++) {
      var randomIndex = Math.floor(Math.random()* upperalpha.length);
      var randomEl = upperalpha[randomIndex];
      possibleChar.push(randomEl)
    }
  }

  if(options.hasLower ===true){
    for (let index = 0; index < options.length; index++) {
      var randomIndex = Math.floor(Math.random()*loweralpha.length);
      var randomEl = loweralpha[randomIndex];
      possibleChar.push(randomEl)
    }
  }

  if(options.hasNumber === true){
    for (let index = 0; index < options.length; index++) {
      var randomIndex = Math.floor(Math.random()*numbers.length);
      var randomEl = numbers[randomIndex];
      possibleChar.push(randomEl)
    }
  }

  if(options.hasSpec === true){
    for (let index = 0; index < options.length; index++) {
      var randomIndex = Math.floor(Math.random()*symbols.length);
      var randomEl = symbols[randomIndex];
      possibleChar.push(randomEl)
    }
  }

  for (let index = 0; index < options.length; index++) {
    var randomIndex = Math.floor(Math.random()*possibleChar.length);
    var randomEl = possibleChar[randomIndex];
    results.push(randomEl);
  }

  return results.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")
  

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


