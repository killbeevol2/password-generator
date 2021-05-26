function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+";
  return symbols[Math.floor(Math.random()) * symbols.length];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() => {
  const lower = "asdfhjl".split("");
  const upper = lower.join("").toUpperCase().split("");
  const numeric = [1, 2, 3, 4, 5, 6, 7];
  const specialChar = "!@#$%%^&".split("");

  const pwCount = parseInt(prompt("How long do you want your password to be?"));

  const options = [];
  let pw = "";

  if (!pwCount || pwCount < 8 || pwCount > 128) {
    alert("does not meet requirement");
    generatePassword();
  }

  const userLower = confirm("Do you want a lower case character?");
  if (userLower) options.push(lower);

  const userUpper = confirm("Do you want a upper case character?");
  if (userupper) options.push(upper);

  const userNumeric = confirm("Do you want a number character?");
  if (userNumeric) options.push(numeric);

  const userSpC = confirm("Do you want special characters?");
  if (userSpC) options.push(SpC);

  console.log(options);
};

// Write password to the #password input
function writePassword() {
// 1.) series of prompts for password critiera
// 2.) must include 8 - 128 characters
// 3.) at least one character type should be selected


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
