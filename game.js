let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${compScore}`;

const result = document.querySelector("#message");
result.textContent = "Good luck!";


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
        playRound();
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

function playRound() {

    if (playerChoiceInt == 0 && compChoiceInt == 0 ||
        playerChoiceInt == 1 && compChoiceInt == 1 ||
        playerChoiceInt == 2 && compChoiceInt == 2) {
            result.textContent = "Its a tie! You both chose " + playerChoice;
        }
        else if (playerChoiceInt == 0 && compChoiceInt == 2 ||
            playerChoiceInt == 1 && compChoiceInt == 0 ||
            playerChoiceInt == 2 && compChoiceInt == 1) {
                result.textContent = "You Won! You chose " + playerChoice + " and the computer chose " + compChoice;
                playerScore++;
        }
        else if (playerChoiceInt == 0 && compChoiceInt == 1 ||
            playerChoiceInt == 1 && compChoiceInt == 2 ||
            playerChoiceInt == 2 && compChoiceInt == 0) {
                result.textContent = "You lost! You chose " + playerChoice + " and the computer chose " + compChoice;
                compScore++;
        }
}
