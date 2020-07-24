// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (listens for the 'click' before generating)
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  // this whole next session is all one function --> generatePassword() 
function generatePassword() {
  var confirmLength = prompt(
    "Please enter how many characters you want your password to be",
    "Please keep your number between 8 and 128"
  );

  confirmLength = parseInt(confirmLength);

  if (confirmLength < 8 || confirmLength > 128) {
    alert("Please keep your number between 8 and 128");
    return generatePassword();
  } 

  // Next, we have our variables for the character choices in the password.

  var confirmUpper = confirm("Please confirm if you want an UPPERCASE letter");
  var confirmLower = confirm("Please confirm if you want a LOWERCASE letter");
  var confirmNumber = confirm("Please confirm if you want a NUMBER");
  var confirmSymbol = confirm("Please confirm if you want a SYMBOL");

  // If they don't confirm for any of them...

  if (!(confirmUpper || confirmLower || confirmNumber || confirmSymbol)) {
    alert("Please select at least one option");
    return generatePassword();
  }

  // Next we define the password as a variable that can be filled, so blank

  var password = "";

  // We concat the strings of the character variables with the password variable so as to fill that blank space.
  // The overall function here will be telling the generator that as long as the generated password is less than the specified length, it should keep generating characters

  while (password.length < confirmLength) {
    if (confirmUpper) {
      // this is the concat that connects getRandomUpper with password
      password += getRandomUpper();
      // then the next if statement asks the loop to check if the password and requested length are the same.  If not, continue looping.  If yes, break.
      if (password.length === confirmLength) break;
    }

    // and then we repeat it with the others
    if (confirmLower) {
      password += getRandomLower();
     if (password.length === confirmLength) break;
    }

    if (confirmNumber) {
      password += getRandomNumber();
      if (password.length === confirmLength) break;
    }

    if (confirmSymbol) {
      password += getRandomSymbol();
       if (password.length === confirmLength) break;
    }
  }
    
    // Then we take the password that is now generated and have all the characters separate out into individual elements to be shuffled around
    password = password.split("");
    // loop i = the length of the password rather than 0 so there isn't a confusion of integers, rather it's going off of already available information
    // for (the base value/the maximum value/the current value +1 every loop)
    for (var i = password.length; i < password.length; i++) {
      var randIndex = Math.floor(Math.random() * password.length);

      var temp1 = password[i];
      var temp2 = password[randIndex];
      // this then shuffles the characters around.
      password[i] = temp2;
      password[randIndex] = temp1;
    }
    // finally take the array of characters and return it to being a string and showing the final password.
    return password.join ("");
  }

 // below are the functions being mentioned above that are used to actually source the random characters.

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

function getRandomSymbol() {
  const symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

