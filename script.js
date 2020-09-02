const choices = ["Rock", "Paper", "Scissors"];
var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;
var totalScore;
var roundWinner;

// get buttons from html

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorBtn = document.querySelector("#scissor-btn");

// listen for button click
// computer chooses on click

rockBtn.addEventListener("click", (e) => {
  playerSelection = "rock";
  computerPlay();
});

paperBtn.addEventListener("click", (e) => {
  playerSelection = "paper";
  computerPlay();
});
scissorBtn.addEventListener("click", (e) => {
  playerSelection = "scissor";
  computerPlay();
});

// randomly choose for computer

function computerPlay() {
  computerSelection = choices[
    Math.floor(Math.random() * choices.length)
  ].toLowerCase();
  playRound();
}

// evaluate computer vs player
// return winner

function playRound() {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        roundWinner = "tie";
        keepScore();
        break;
      case "paper":
        roundWinner = "computer";
        keepScore();
        break;
      case "scissors":
        roundWinner = "player";
        keepScore();
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        roundWinner = "player";
        keepScore();
        break;
      case "paper":
        roundWinner = "tie";
        keepScore();
        break;
      case "scissors":
        roundWinner = "computer";
        keepScore();
    }
  } else {
    switch (computerSelection) {
      case "rock":
        roundWinner = "computer";
        keepScore();
        break;
      case "paper":
        roundWinner = "player";
        keepScore();
        break;
      case "scissors":
        roundWinner = "tie";
        keepScore();
    }
  }
}

// DOM manipulation to display score

const playerDisplay = document.querySelector(".player-score");
playerDisplay.textContent = "0";

const computerDisplay = document.querySelector(".computer-score");
computerDisplay.textContent = "0";

// DOM manipulation to display winner

const winnerDisplay = document.querySelector(".display-winner");

// Keep track of score

function keepScore() {
  if (roundWinner === "player") {
    playerScore++;
    playerDisplay.textContent = playerScore;
    checkWinner();
  } else if (roundWinner === "computer") {
    computerScore++;
    computerDisplay.textContent = computerScore;
    checkWinner();
  } else if (roundWinner === "tie") {
    winnerDisplay.textContent = "Tie!";
  }
}

// Check who has most points

function checkWinner() {
  winnerDisplay.textContent = "";
  if (playerScore == 5) {
    winnerDisplay.textContent = "You win!";
    disablePlayButtons();
  } else if (computerScore == 5) {
    winnerDisplay.textContent = "Computer wins!";
    disablePlayButtons();
  }
}

function disablePlayButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorBtn.disabled = true;
}

// Loop through game 5 times

// function game() {
//   {
//     // playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
//     console.log(`Player selected ${playerSelection}`);
//     computerSelection = computerSelection();
//     console.log(`Computer selected ${computerSelection}`);
//     totalScore = playRound(playerSelection, computerSelection);
//     console.log(totalScore);
//     keepScore();
//   }
//   checkWinner();
// }

//    ----first pseudoCode draft----
//    They're will be a constant named Choices of object type with value of array[rock,paper,scissors]
//    They're will be a variable named playerSelection of object type value from browser prompt
//    They're will be a variable named computerSelection of object type with a function named computerPlay that randomly selects one of three const

//    playerSelection and computerSelection will evaluate the winner

//     Keep score of who wins playerScore and computerScore
//     Repeat for 5 rounds
//     Report winner
