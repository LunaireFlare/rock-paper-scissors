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

const roundText = document.querySelector(".round-text");
const roundNumber = document.querySelector(".current-round");


let heroScore = 0;
let opponentScore = 0;
let round = 1;

function getHeroChoice() {
  return new Promise((resolve) => {
  weaponButtons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
      let heroChoice = "";
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
      opponentIcon.src ="images/icon_boulder.webp";
       break;
    case "codex":
      opponentIcon.src ="images/icon_codex.webp";
       break;
    case "longsword": 
      opponentIcon.src ="images/icon_sword.webp";
       break;
    };
    return opponentChoice;
};


function updateRounds() {
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
    } else if (heroChoice === "boulder" && opponentChoice === "codex" ||
      heroChoice === "codex" && opponentChoice === "longsword" ||
      heroChoice === "longsword" && opponentChoice === "boulder") {
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
  weaponText.textContent = "\u200b";
  replayButton.style.visibility = "visible";
}

replayButton.addEventListener("click", resetGame);


function resetGame() {
    heroScore = 0;
    opponentScore = 0;
    round = 1;

    boulderWeapon.disabled = false;
    codexWeapon.disabled = false;
    longswordWeapon.disabled = false;

    replayButton.style.visibility = "hidden";

    weaponText.textContent = "You cannot go into battle empty-handed.";
    outputText.textContent = "No weapon was chosen yet.";
    roundNumber.textContent = "0";
    roundText.textContent = "You haven't won a round yet, and neither has the enemy.";
    duelResult.textContent = "";
    opponentIcon.src = "images/icon_opponent.webp";

     playRound();
   };

playRound();