const weaponButtons = document.querySelectorAll(".weapon-button");
const weaponText = document.querySelector(".weapon-text");

const boulderWeapon = document.querySelector(".boulder-button");
const codexWeapon = document.querySelector(".codex-button");
const longswordWeapon = document.querySelector(".longsword-button");

const boulderIcon = document.querySelector('.boulder-icon');
const codexIcon = document.querySelector('codex-icon');
const longswordIcon = document.querySelector('longsword-icon');

const h1 = document.querySelector("h1");
h1.textContent = "This is a test";


function getHeroChoice() {
  let heroChoice = "";

  weaponButtons.forEach((weapon) => {
    weapon.adEventListener("click" () => {
      if (weapon.classList.contains("boulder-button")) {
        heroChoice = "boulder";
        weaponText.textContent = "Literally crushing your enemies.Straightforward and efficient.";
       } else if (weapon.classList.contains("codex-button")) {
        heroChoice = "codex";
        weaponText.innerText = "Knowledge is power, so, the more pages the better, right?";
       } else {
        heroChoice = "longsword";
        weaponText.innerText = "A noble weapon, fit for the finest - and tallest - knights!";
       };
      });
    });
  };


// computer randomly chooses and returns one of the available values
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  let opponentIcon = document.querySelector(".opponent-icon")

  switch (compChoice) {
    case 0:
      opponentIcon.classList.add;
      break;
    case 1:
      return "Codex";
      break;
    case 2: 
      return "Longsword";
      break; 
  }
} 

// human player chooses one of the three values in input (in the absence of value, prompts again)
// function getHumanChoice() {
//   let humChoice = prompt("Choose your weapon!", "Boulder  |  Codex  |  Longsword").toLowerCase();
//   switch (humChoice) {
//     case "boulder":
//       console.log("<Hero> Literally crushing your enemies. Straightforward and efficient.");
//       return humChoice;
//       break;
//     case "codex": 
//       console.log("<Hero> Knowledge is power, so, the more pages the better, right?");
//       return humChoice;
//       break;
//     case "longsword":
//       console.log("<Hero> A noble weapon, fit for the finest - and tallest - knights!");
//       return humChoice;
//       break;
//     default:
//       console.error("You cannot go into battle empty-handed!");
//       return getHumanChoice();
//       break;
//   }
// }

// function to play 5 rounds
function playGame() {
  let heroScore = 0;
  let opponentScore = 0;

  // logic of a single round = elect winner based on input and increment score accordingly
  function playRound(compSelection, humSelection) { 
    if (humSelection == "boulder" && compSelection == "Longsword" ||
        humSelection == "codex" && compSelection == "Boulder" ||
        humSelection == "longsword" && compSelection == "Codex") {
          ++heroScore;     
          return "You have triumphed over your foe!";
    } else if (humSelection == "boulder" && compSelection == "Codex" ||
        humSelection == "codex" && compSelection == "Longsword" ||
        humSelection == "longsword" && compSelection == "Boulder") {
          ++opponentScore;     
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
    console.log(`%cYou have won ${humanScore} rounds. Your opponent has won ${computerScore} rounds.`, "font-style:italic");
    console.log("%cChoose your weapon for the next round.", "background-color: #575c55");
  }

  // winner declaration at the end of all 5 rounds
  if (humanScore > computerScore) {
    console.log("%cCongratulations! You showed your might and won this duel.", "background-color:darkgreen")
  } else if (humanScore < computerScore) {
    console.log("%cYour opponent proved stronger than you. Keep practicing.", "background-color:darkred")
  } else {
    console.log("%cAlas, a tie! The victory remains unclaimed.","background-color:#575c55");  
  }
}


let heroButton = document.querySelector('.boulder-button').addEventListener('click', changeImage() => {
  heroButton.classList.remove(boulderIcon);
  heroButton.classList.add(codexIcon);
})


// playGame();