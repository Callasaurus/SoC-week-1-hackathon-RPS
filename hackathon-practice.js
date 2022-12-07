// creating a function that generates a random number between 1-3 and reassigning to rps
function randomComputerMove() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // math.random generates from 0, so * 3 is 0,1,2 - hence why adding 1 at the end 
    console.log(randomNumber);
    // console.log to see if the number matches up with the function output
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors"
    }
}

console.log(randomComputerMove())

// defining outside of the main loop so scores can be tracked and don't get reset when loop restarts
let gamesWon = 0;
let gamesLost = 0;
let gamesDrawn = 0;

// defining outside of the main loop so scores can be tracked and doesn't get reset when loop restarts
let gameScore = 0;

// defining outside of main game loop
let scoreTracker = ""

// defining outside of username loop 
let newNameNeeded = true
let playerName = ""

// while loop checks if the name is appropriate 
while (newNameNeeded == true) {
    playerName = prompt("What is your name?");
    if ((playerName.charAt(0).match(/^[A-Z]*$/) && playerName.length < 10) == true) {
        newNameNeeded = false;
    } else {
        alert("Username must start with a capital and be less than 10 characters.");
        newNameNeeded = true;
    }
}

// defining outside of the main loop so it will keep going if player confirms 
let playAgain = true;
let wrongInput = true;
let playerMove = ""

while (playAgain == true) {

    // if spelling mistake, re-type until correct
    while (wrongInput == true) {
        playerMove = prompt("Hello " + playerName + "! " + "Please type either rock, paper or scissors to play.");
        if (playerMove != "rock" && playerMove != "paper" && playerMove != "scissors") {
            alert("Incorrect input (spelling mistake). Please try again.");
            wrongInput = true;
        } else {
            wrongInput = false;
        }
    }

    function getWinner(playerMove, randomComputerMove) {
        if (playerMove === randomComputerMove) {
            return 0;
        } else if (playerMove === "rock" && randomComputerMove === "paper") {
            return -1;
        } else if (playerMove === "rock" && randomComputerMove === "scissors") {
            return 1;
        } else if (playerMove === "paper" && randomComputerMove === "scissors") {
            return -1;
        } else if (playerMove === "paper" && randomComputerMove === "rock") {
            return 1;
        } else if (playerMove === "scissors" && randomComputerMove === "rock") {
            return -1;
        } else if (playerMove === "scissors" && randomComputerMove === "paper") {
            return 1;
        }
    }

    let result = getWinner(playerMove, randomComputerMove())
    console.log(result)

    // alerts for outcome
    if (result === -1) {
        alert("You lose!")
    } else if (result === 0) {
        alert("Draw!")
    } else if (result === 1) {
        alert("You win!")
    }

    // keeping track of the result
    if (result < 0) {
        gamesLost++;
    } else if (result === 0) {
        gamesDrawn++;
    } else if (result > 0) {
        gamesWon++
    }

    // keeping track of the score
    if (result > 0) {
        gameScore++;
    } else if (result < 0) {
        gameScore--;
    }

    scoreTracker = alert("Number of games won: " + gamesWon + "\nNumber of games drawn: " + gamesDrawn + "\nNumber of games lost: " + gamesLost + "\nGame score: " + gameScore)

    playAgain = confirm("Would you like to play again?");
}