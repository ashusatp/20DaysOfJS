// nested if else

// making a guess game
    // winning number = 15


let winningNumber = 15;
let userGuess = prompt("Guess a number")
 // always promt() will take input in string. so, if we entered 15 then it will read as "15"
console.log(typeof userGuess, userGuess);



// to get a number as ainput after entering a user input

let winingNumber = 15;
let userGuessAgain = +prompt("Guess a number again ")
console.log(typeof userGuessAgain, userGuessAgain);

if (userGuessAgain === winingNumber) {
    console.log("your guess is right !!");
}
else if (userGuessAgain< winingNumber && userGuessAgain>=winingNumber-2) {
    console.log("you are so near to the right answer !!");
}
else if (userGuessAgain>winingNumber && userGuessAgain<=winingNumber+2) {
    console.log("you are so near to the right answer !!");
}
else{
    console.log("your guess is wrong !!");
}