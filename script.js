// BOULDER, PARCHMENT, LONGSWORD GAME

// players score variables
let humanScore = 0;
let computerScore = 0;

let compChoice = Math.floor(Math.random() * 3);
let humChoice = prompt("Choose your weapon!", "Choose wisely.").toLowerCase();

// computer randomly chooses and returns one of the available values
function getComputerChoice() {
  switch (compChoice) {
    case 0:
      return "Boulder";
      break;
    case 1:
      return "Codex";
      break;
    case 2: 
      return "Longsword";
      break; 
  }
} 
console.log(getComputerChoice());

// human player chooses one of the three values in input
function getHumanChoice() {
  switch (humChoice) {
    case "Boulder":
      return "Literally crushing your enemies. Straightforward and efficient.";
      break;
    case "Codex": 
      return "Knowledge is power, but you already knew that, right?";
      break;
    case "Longsword":
      return "A truly noble weapon, fit for the finest (and tallest) knight!";
      break;
    default:
      return "You cannot go into battle empty-handed!";
      break;
  }
}
console.log(getHumanChoice());

// single-round logic
function playRound(compChoice, humChoice) {
  if (humChoice == "Boulder" && compChoice == 2 ||
    humChoice == "Codex" && compChoice == 0 ||
    humChoice == "Longsword" && compChoice == 1) {
      ++humanScore;     
      return "You have triumphed over your foe!";
  } else if (humChoice == "Boulder" && compChoice == 1 ||
    humChoice == "Codex" && compChoice == 2 ||
    humChoice == "Longsword" && compChoice == 0) {
      ++computerScore;     
      return "Your enemy was stronger... This time."
    } else {
      return "No one has won the battle."
    } 
}
console.log(playRound(compChoice, humChoice));
console.log(humanScore);
console.log(computerScore);