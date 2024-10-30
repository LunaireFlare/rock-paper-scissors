// BOULDER, PARCHMENT, LONGSWORD GAME - CONSOLE-BASED EDITION

// computer randomly chooses and returns one of the available values
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      console.log("<Foe> Your opponent has chosen... Boulder.");
      return "Boulder";
      break;
    case 1:
      console.log("<Foe> Your opponent has chosen... Codex.");
      return "Codex";
      break;
    case 2: 
      console.log("<Foe> Your opponent has chosen... Longsword.");
      return "Longsword";
      break; 
  }
} 

// human player chooses one of the three values in input (in the absence of value, prompts again)
function getHumanChoice() {
  let humChoice = prompt("Choose your weapon!", "Boulder  |  Codex  |  Longsword").toLowerCase();
  switch (humChoice) {
    case "boulder":
      console.log("<Hero> Literally crushing your enemies. Straightforward and efficient.");
      return humChoice;
      break;
    case "codex": 
      console.log("<Hero> Knowledge is power, so, the more pages the better, right?");
      return humChoice;
      break;
    case "longsword":
      console.log("<Hero> A noble weapon, fit for the finest - and tallest - knight!");
      return humChoice;
      break;
    default:
      console.error("You cannot go into battle empty-handed!");
      return getHumanChoice();
      break;
  }
}

// function to play 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // logic of a single round = elect winner based on input and increment score accordingly
  function playRound(compSelection, humSelection) { 
    if (humSelection == "boulder" && compSelection == "Longsword" ||
        humSelection == "codex" && compSelection == "Boulder" ||
        humSelection == "longsword" && compSelection == "Codex") {
          ++humanScore;     
          return "You have triumphed over your foe!";
    } else if (humSelection == "boulder" && compSelection == "Codex" ||
        humSelection == "codex" && compSelection == "Longsword" ||
        humSelection == "longsword" && compSelection == "Boulder") {
          ++computerScore;     
          return "Your enemy was stronger... This time."
    } else {
          return "Alas, a tie! No points this round."
    } 
  }

  // for loop to recall playRound() 5 times
  for (let round = 1; round <= 5; round++) {
    let compSelection = getComputerChoice();
    let humSelection = getHumanChoice();
    console.log(playRound(compSelection, humSelection));
    console.log(`You have won ${humanScore} rounds. Your opponent has won ${computerScore} rounds.`);
  }

  // winner declaration at the end of all 5 rounds
  if (humanScore > computerScore) {
    return "Congratulations! You showed your might and won this duel."
  } else if (humanScore < computerScore) {
    return "Your opponent proved stronger than you. Keep practicing."
  } else {
    return "Alas, a tie! The victory remains unclaimed."
  }
}
console.log(playGame());