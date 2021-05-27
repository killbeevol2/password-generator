// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   const symbols = "!@#$%^&*()_+";
//   return symbols[Math.floor(Math.random()) * symbols.length];
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {
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
  if (userUpper) options.push(upper);

  const userNumeric = confirm("Do you want a number character?");
  if (userNumeric) options.push(numeric);

  const userSpC = confirm("Do you want special characters?");
  if (userSpC) options.push(specialChar);

  console.log(options);

  if (options.length === 0) {
    alert("Must select at least one option");
    generatePassword();
  }

  if (options.length === 1) {
    const option = options[0];
    for (let i = 0; i < pwCount; i++) {
      const randIndex = Math.floor(Math.random() * option.length);
      pw += option[randIndex];
    }

    return pw;
  }

  while (pw.length !== pwCount) {
    for (let i = 0; i < options.length; i++) {
      const currentOption = options[i];
      const randIndex = Math.floor(Math.random() * currentOption.length);
      pw += currentOption[randIndex];

      if (pw.length === pwCount) return pw;
    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#count").textContent = password.length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
