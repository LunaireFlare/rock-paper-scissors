const weaponButtons = document.querySelectorAll(".weapon-button");
const weaponText = document.querySelector(".weapon-text");
const outputText = document.querySelector(".output-text");

const boulderWeapon = document.querySelector(".boulder-button");
const codexWeapon = document.querySelector(".codex-button");
const longswordWeapon = document.querySelector(".longsword-button");
const replayButton = document.querySelector(".replay-button");

const boulderIcon = document.querySelector(".boulder-icon");
const codexIcon = document.querySelector(".codex-icon");
const longswordIcon = document.querySelector(".longsword-icon");
const opponentIcon = document.querySelector(".opponent-icon");

let heroScore = 0;
let opponentScore = 0;
let round = 0;

function getHeroChoice() {
  let heroChoice = "";

  weaponButtons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
      if (weapon.classList.contains("boulder-button")) {
        heroChoice = "boulder";
        weaponText.textContent = "Literally crushing your enemies. Straightforward and efficient.";
       } else if (weapon.classList.contains("codex-button")) {
        heroChoice = "codex";
        weaponText.textContent = "Knowledge is power, so, the more pages the better, right?";
       } else {
        heroChoice = "longsword";
        weaponText.textContent = "A noble weapon, fit for the finest - and tallest - of knights!";
       };
      });
    });
  };

function getOpponentChoice() {
  let opponentChoice = Math.floor(Math.random() * 3);
  let opponentTest = document.querySelector(".opponent-test");

  switch (opponentChoice) {
    case 0:
      opponentIcon.classList.replace("opponent-icon", "boulder-icon");
      opponentTest.textContent = "boulder";
      console.log("boulder");
      return "boulder";
      break;
    case 1:
      opponentIcon.classList.replace("opponent-icon", "codex-icon");
      opponentTest.textContent = "codex";
      console.log("codex");
      return "codex";
      break;
    case 2: 
      opponentIcon.classList.replace("opponent-icon", "longsword-icon");
      opponentTest.textContent = "longsword";
      console.log("longsword");
      return "longsword";
      break;
  };
};


function playRound(heroSelection, opponentSelection) { 
  if (heroSelection == "boulder" && opponentSelection == "longsword" ||
      heroSelection == "codex" && opponentSelection == "boulder" ||
      heroSelection == "longsword" && opponentSelection == "codex") {
        ++heroScore;     
        outputText.textContent = "You have triumphed over your foe!";
  } else if (heroSelection == "boulder" && opponentSelection == "codex" ||
      heroSelection == "codex" && opponentSelection == "longsword" ||
      heroSelection == "longsword" && opponentSelection == "boulder") {
        ++opponentScore;     
        outputText.textContent = "Your enemy was stronger... This time."
  } else {
    outputText.textContent = "Alas, a tie! No points this round."
  } 
}

  // for loop to recall playRound() 5 times
  for (round = 1; round <= 4; round++) {
    let opponentSelection = getOpponentChoice();
    let heroSelection = getHeroChoice();
    playRound(heroSelection, opponentSelection);
    const roundText = document.querySelector(".round-text");

    // roundText.textContent = `You have won ${heroScore} rounds. Your opponent has won ${opponentScore} rounds.`;
  }


// winner declaration at the end of all 5 rounds
function finishGame() {
  const duelResult = document.querySelector(".duel-result");
  if (heroScore > opponentScore) {
    duelResult.textContent = "Congratulations! You showed your might and won this duel.";
  } else if (heroScore < opponentScore) {
    duelResult.textContent = "Your opponent proved stronger than you. Keep practicing.";
  } else {
    duelResult.textContent = "Alas, a tie! The victory remains unclaimed.";  
  }
  replayButton.style.visibility = "visible";
}

function playGame() {

  getHeroChoice();
  getOpponentChoice();
  playRound();
  finishGame();
}

playGame();