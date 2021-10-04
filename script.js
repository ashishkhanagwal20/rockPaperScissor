let choice = prompt(`What do you choose?\nSelect from\nRock\nPaper\nScissor\n`);
let playerChoiceStr = choice.toUpperCase();

let playerChoiceNum;
if (playerChoiceStr == "ROCK") {
  playerChoiceNum = 0;
} else if (playerChoiceStr == "PAPER") {
  playerChoiceNum = 1;
} else if (playerChoiceStr == "SCISSOR") {
  playerChoiceNum = 2;
}

let computerChoice = Math.floor(Math.random() * 3);

let gameFunction = (playerSelection, computerSelection) => {
  if (playerSelection === 0) {
    if (computerSelection === 0) {
      alert("It's a Tie, You both choose Rock");
    } else if (computerSelection === 1) {
      alert("You lose, computer choose paper");
    } else if (computerSelection === 2) {
      alert("You win, computer choose scissor");
    }
  } else if (playerSelection === 1) {
    if (computerSelection === 0) {
      alert("You Win, Computer choose Rock");
    } else if (computerSelection === 1) {
      alert("it's a tie, you both choose paper");
    } else if (computerSelection === 2) {
      alert("You lose, computer choose scissor");
    }
  } else if (playerSelection === 2) {
    if (computerSelection === 0) {
      alert("You lose, Computer choose Rock");
    } else if (computerSelection === 1) {
      alert("You win, computer choose paper");
    } else if (computerSelection === 2) {
      alert("It's a tie, you both choose scissor");
    }
  }
};

gameFunction(playerChoiceNum, computerChoice);
