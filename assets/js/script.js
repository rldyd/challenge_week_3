// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLower = ["abcdefghijklmnopqrstuvwxyz"];
var passwordUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passwordNumber = ["0123456789"];
var passwordSpecial = ["@!#$^%&*"];

var reset = function()
{
  passwordLower = ["abcdefghijklmnopqrstuvwxyz"];
  passwordUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  passwordNumber = ["0123456789"];
  passwordSpecial = ["@!#$^%&*"];
}

var generatePassword = function() 
{
  reset();
  var char = prompt('How many characters would you like set up for your new password?');

  if(char < 8 || char > 128)
  {
    alert("You have to choose between 8 and 128 characters");
  }
  var lowercase = confirm('Do you want to put Lowercase in your password?');
  var uppercase = confirm('Do you want to put Uppercase in your password?');
  var number = confirm ('Do you want to put Number in your password?');
  var symbol = confirm ('Do you want to put Special symbols in your password?');
  
  if (!lowercase)
  {
     passwordLower = [];
  }
  if (!uppercase)
  {
     passwordUpper = [];
  }
  if (!number)
  {
     passwordNumber = [];
  }
  if (!symbol)
  {
     passwordSpecial = [];
  }
  if (!lowercase && !uppercase && !number && !symbol)
  {
    alert('YOU HAVE TO CHOOSE ONE OF THE CHARACTERS!');
    reset();
    writePassword();
  }
  
  var combine = passwordNumber + passwordSpecial + passwordUpper + passwordLower;
  var newPassword = "";
  //for loop
  for (var i=0; i < char; i++)
  {
    var newNum = combine[Math.floor(Math.random() * combine.length)];
    newPassword += newNum;
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  reset();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
