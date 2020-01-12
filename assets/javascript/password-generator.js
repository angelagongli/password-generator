var password = "";

var specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

document.querySelector("#generate-password").addEventListener("click", function() {

    password = "";
    
    var userInputLength = prompt("Enter the length of your password (a number between 8 and 128)");
    var passwordLength = parseInt(userInputLength);

    while (!((passwordLength >= 8) && (passwordLength <= 128))) {
        userInputLength = prompt("Invalid input, please enter a number between 8 and 128!");
        passwordLength = parseInt(userInputLength);
    }
    
    var containsSpecial = confirm("Include special characters in password?");
    var containsNumeric = confirm("Include numbers in password?");
    var containsLower = confirm("Include lowercase letters in password?");
    var containsUpper = confirm("Include uppercase letters in password?");
    
    while ( !(containsSpecial || containsNumeric || containsLower || containsUpper) ) {
        alert("Please include at least one character type in your password.");
        containsSpecial = confirm("Include special characters in password?");   
        containsNumeric = confirm("Include numbers in password?");
        containsLower = confirm("Include lowercase letters in password?");
        containsUpper = confirm("Include uppercase letters in password?");
    }
    
    var characterList = [];
    
    if (containsSpecial) {
        characterList = characterList.concat(specialCharacters);
    }
    
    if (containsNumeric) {
        characterList = characterList.concat(numbers);
    }
    
    if (containsLower) {
        characterList = characterList.concat(lowercaseLetters);
    }
    
    if (containsUpper) {
        characterList = characterList.concat(uppercaseLetters);
    }
    
    for (var i = 0; i < userInputLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterList.length);
        password += characterList[randomIndex];
    }

    document.querySelector("textarea").innerHTML = password;

})

document.querySelector("#copy-to-clipboard").addEventListener("click", function(){

    if (password !== "") {
        var copyText = document.querySelector("textarea");
        copyText.select();
        document.execCommand("copy");
        document.getSelection().empty();
    }
})

    