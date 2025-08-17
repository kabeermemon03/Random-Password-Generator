const passwordBar = document.getElementById("Password")
const Length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const Numbers = "0123456789"
const specialSymbols = "!@#$%^&*~<>|"

const allChars = upperCase + lowerCase + Numbers + specialSymbols;

function RandomGeneration(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += Numbers[Math.floor(Math.random() * Number.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    while(Length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBar.value = password
}

function copyPassword(){
    passwordBar.select()
    document.execCommand("copy")
}
