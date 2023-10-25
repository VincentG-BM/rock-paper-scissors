let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        if (playerChoice == "rock") {
            playerChoiceInt = 0;
        }
        else if (playerChoice == "paper") {
            playerChoiceInt = 1;
        }
        else if (playerChoice == "scissors") {
            playerChoiceInt = 2;
        }
        compChoiceInt = getComputerChoice(compChoice);
        // playGame();
    })
})

function getComputerChoice(compChoice) {
    let random = Math.floor(Math.random() * 3)
    if (random == 0) {
        compChoice.Value = "rock";
    } else if (random == 1) {
        compChoice.Value = "paper";
    } else if (random == 2) {
        compChoice.Value = "scissors";
    }
    return random;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection
    let computer = computerSelection

    if (player == "rock" && computer == "rock") {
        console.log("It's a Tie!")
    } else if (player == "rock" && computer == "paper") {
        console.log("You Lose! Paper beats Rock")
    } else if (player == "rock" && computer == "scissors") {
        console.log("You Win! Rock beats Paper")
    }

    if (player == "paper" && computer == "rock") {
        console.log("You Win! Paper beats Rock")
    } else if (player == "paper" && computer == "paper") {
        console.log("It's a Tie!")
    } else if (player == "paper" && computer == "scissors") {
        console.log("You Lose! Scissors beats Paper")
    }

    if (player == "scissors" && computer == "rock") {
        console.log("You Lose! Rock beats Scissors")
    } else if (player == "scissors" && computer == "paper") {
        console.log("You Win! Scissors beats Paper")
    } else if (player == "scissors" && computer == "scissors") {
        console.log("It's a Tie!")
    }
}
