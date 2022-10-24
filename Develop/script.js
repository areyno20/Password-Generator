// Assignment code here
const flags = {
  uppercase: false,
  numbers: false,
  symbols: false,
  length: 5
}

const selectors = {
  copy: 'copy',
  checkbox: 'checkbox',
  slider: 'slider',
  button: 'button',
  sliderValue: document.querySelector('.value'),
  input: document.querySelector('input[type="text"]')
}

var generateBtn = document.querySelector("#generate");

var password=document.getElementById("#generate");

 function writePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 14;
    var password = "";
    var passwordText = document.querySelector("#password");
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
     
     passwordText.value = password;
 }


generateBtn.addEventListener('click', event => {
  switch (event.target.dataset.jsSelector) {
        // Event listener for copy
        case selectors.copy:
            const dummy = document.createElement('textarea')

            document.body.appendChild(dummy)

            dummy.value = selectors.input.value
            dummy.select()

            document.execCommand('copy')
            document.body.removeChild(dummy)
        break;

        // Event listeners for checkboxes
        case selectors.checkbox:
            flags[event.target.control.id] = !event.target.control.checked
        break;

        // Event listeners for slider
        case selectors.slider:
            const value = event.target.valueAsNumber

            selectors.sliderValue.innerText = value
            flags.length = value
        break;

        // Event listener for generate button
        case selectors.button:
            selectors.input.value = generatePassword()
        break;
    }
})


var slider = document.getElementById("sliderrange");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}






// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)

