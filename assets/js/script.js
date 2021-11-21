// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password;
  var passwordText = document.querySelector("#password");
  var lowercases = 'abcdefghijklmnopqrstuvwxyz';
  var uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var specialCharaters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  var passwordCharacters = [];

  //Storing length password value
  var passwordLength = prompt('Which is going to be the length of your password (choose between 8 to 128 characters):', '8');

  //Evaluating if password has at least 8 characters and no greater than 128
  if (passwordLength === '' || passwordLength < 8 || passwordLength > 128) {
    if (passwordLength === null) return;
    alert('Password length must be between 8 and 128 characters');
    return;
  }

  //Storing if password is going to include specific type of characters
  var hasLowercase = confirm('Do you want lowercases in your password?');
  var hasUppercase = confirm('Do you want uppercases in your password?');
  var hasNumbers = confirm('Do you want numbers in your password?');
  var hasSpecialCharaters = confirm('Do you want special characters in your password?');

  //If there is no criteria selected the user is returned to get started again
  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecialCharaters) {
    alert('Password must contain at least one of the criterias (lowercase, uppercase, number or special charactes');
    return;
  }

  //Pushing values to the included character array
  if (hasLowercase) passwordCharacters.push(lowercases);
  if (hasUppercase) passwordCharacters.push(uppercases);
  if (hasNumbers) passwordCharacters.push(numbers);
  if (hasSpecialCharaters) passwordCharacters.push(specialCharaters);

  //Generate password function
  function generatePassword() {
    var passwordString = '';

    for (let i = 0; i < passwordLength; i++) {
      var charactersIndex = selectRandom(passwordCharacters);
      var chosenCharacterIndex = selectRandom(passwordCharacters[charactersIndex]);

      passwordString += passwordCharacters[charactersIndex][chosenCharacterIndex];
    }

    return passwordString;
  }

  //Select random values function
  function selectRandom(value) {
    return Math.floor(Math.random() * value.length);
  }

  password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
