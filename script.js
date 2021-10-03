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
console.log(playerChoiceNum);
