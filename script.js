// -- UI REFERENCES -- //
const weaponButtons = document.querySelectorAll(".weapon-button");
const weaponText = document.querySelector(".weapon-text");
const outputText = document.querySelector(".output-text");
const duelResult = document.querySelector(".duel-result");

const boulderWeapon = document.querySelector(".boulder-button");
const codexWeapon = document.querySelector(".codex-button");
const longswordWeapon = document.querySelector(".longsword-button");
const replayButton = document.querySelector(".replay-button");

const boulderIcon = document.querySelector(".boulder-icon");
const codexIcon = document.querySelector(".codex-icon");
const longswordIcon = document.querySelector(".longsword-icon");
const opponentIcon = document.querySelector(".opponent-icon");

// let opponentTest = document.querySelector(".opponent-test");

let heroScore = 0;
let opponentScore = 0;
let round = 1;

function getHeroChoice() {
  return new Promise((resolve) => {
  let heroChoice = "";

  weaponButtons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
      if (weapon.classList.contains("boulder-button")) {
        weaponText.textContent = "Literally crushing your enemies. Straightforward and efficient.";
        heroChoice = "boulder";
       } else if (weapon.classList.contains("codex-button")) {
        weaponText.textContent = "Knowledge is power, so, the more pages the better, right?";
        heroChoice = "codex";
       } else {
        weaponText.textContent = "A noble weapon, fit for the finest - and tallest - of knights!";
        heroChoice = "longsword";
       };
      resolve(heroChoice);
      });
    });
  });
};


function getOpponentChoice() {
  const weapons = ["boulder", "codex", "longsword"]
  let opponentChoice = weapons[(Math.floor(Math.random() * weapons.length))];

  switch (opponentChoice) {
    case "boulder":
      // opponentTest.textContent = "boulder";
      opponentIcon.src ="images/icon_boulder.webp";
       break;
    case "codex":
      // opponentTest.textContent = "codex";
      opponentIcon.src ="images/icon_codex.webp";
       break;
    case "longsword": 
      // opponentTest.textContent = "longsword";
      opponentIcon.src ="images/icon_sword.webp";
       break;
    };
    return opponentChoice;
};


function updateRounds() {
  const roundText = document.querySelector(".round-text");
  const roundNumber = document.querySelector(".current-round");
  roundText.textContent = `You have won ${heroScore} rounds. Your opponent has won ${opponentScore} rounds.`;
  roundNumber.textContent = `${round}`;
}


function playRound(heroChoice, opponentChoice) { 
  getHeroChoice().then((heroChoice) => {
    let opponentChoice = getOpponentChoice();

    if (heroChoice === "boulder" && opponentChoice === "longsword" ||
      heroChoice === "codex" && opponentChoice === "boulder" ||
      heroChoice === "longsword" && opponentChoice === "codex") {
        outputText.textContent = "You have triumphed over your foe!";
        ++heroScore;      
    } else if (heroChoice == "boulder" && opponentChoice == "codex" ||
      heroChoice == "codex" && opponentChoice == "longsword" ||
      heroChoice == "longsword" && opponentChoice == "boulder") {
        outputText.textContent = "Your enemy was stronger... This time."
        ++opponentScore;     
    } else {
      outputText.textContent = "Alas, a tie! No points this round."
    };

    updateRounds();
    round++;
  
    if (round <= 5) {
      playRound();
    } else {
      finishGame();
    }
  });
}

function finishGame() {
  if (heroScore > opponentScore) {
    duelResult.textContent = "Congratulations! You showed your might and won this duel.";
  } else if (heroScore < opponentScore) {
    duelResult.textContent = "Your opponent proved stronger than you. Keep practicing.";
  } else {
    duelResult.textContent = "Alas, a tie! The victory remains unclaimed.";  
  }

  boulderWeapon.disabled = true;
  codexWeapon.disabled = true;
  longswordWeapon.disabled = true;
  weaponText.textContent = "";
  replayButton.style.visibility = "visible";
}

function resetGame() {
  replayButton.addEventListener("click", () => {
    heroScore = 0;
    opponentScore = 0;
    round = 1;
    boulderWeapon.disabled = false;
    codexWeapon.disabled = false;
    longswordWeapon.disabled = false;
    replayButton.style.visibility = "hidden";


    weaponText.textContent = "You cannot go into battle empty-handed.";
    outputText.textContent = "No weapon was chosen yet.";
    duelResult.textContent = "";
    opponentIcon.src = "images/icon_opponent.webp";

     playGame();
   });
};

function playGame() {
  playRound();
  resetGame();
}

playGame();