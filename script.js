const choices = ["Rock", "Paper", "Scissors"];
var playerSelection
var computerSelection
var playerScore = 0;
var computerScore = 0;
var totalScore;



// Randomly choose for computer
    
function computerPlay() {
    const computerSelection = choices[Math.floor(Math.random()* choices.length)].toLowerCase();
    return computerSelection;
}



// Evaluate winner if playerSelection == computerSelection it is a tie no score       added
//    if rock and paper, paper wins
//     if rock and scissors, rock wins
//     if paper and scissors, scissors wins

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "rock": 
             return "This round is a tie!"
             break;
            case "paper":
             return "Computer wins this round!"
             break;
            case "scissors":
             return "Player wins this round!"
          } 
     } else if (playerSelection === "paper") {
         switch(computerSelection) {
             case "rock": 
             return "Player wins this round!"
             break;
             case "paper":
             return "This round is a tie!"
             break;
             case "scissors":
             return "Computer wins this round!"
            }
         } else {
                switch(computerSelection) {
                case "rock": 
                return "Computer wins this round!"
                break;
                case "paper":
                return "Player wins this round!"
                break;
                case "scissors":
                return "This round is a tie!"
                }
            }
        
};

// Keep track of score

function keepScore() {
     if ( totalScore === "Player wins this round!") {
            playerScore ++;
        } else if (totalScore === "Computer wins this round!") {
            computerScore ++;
        } else {
            playerScore = playerScore;
            computerScore = computerScore;
        }
        console.log(`Player's score is ${playerScore}`);
        console.log(`Computer's score is ${computerScore}`);
};
 
// Chech who has most points

function checkWinner() {
        if (playerScore < computerScore) {
        console.log("Computer wins the match!");
    } else if (playerScore > computerScore) {
        console.log("Player wins the match!");
    } else {
        console.log("The match is a tie...")
    }
};

// Loop through game 5 times

function game() {
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        console.log(`Player selected ${playerSelection}`);
        computerSelection = computerPlay();
        console.log(`Computer selected ${computerSelection}`);
        totalScore = playRound(playerSelection, computerSelection);
        console.log(totalScore);
        keepScore();
    }
    checkWinner();
};

game();








//    ----first pseudoCode draft----
//    They're will be a constant named Choices of object type with value of array[rock,paper,scissors]
//    They're will be a variable named playerSelection of object type value from browser prompt
//    They're will be a variable named computerSelection of object type with a function named computerPlay that randomly selects one of three const
   
//    playerSelection and computerSelection will evaluate the winner
   
//     Keep score of who wins playerScore and computerScore
//     Repeat for 5 rounds
//     Report winner



