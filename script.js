// -- UI REFERENCES -- //
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
        weaponText.textContent = "Literally crushing your enemies. Straightforward and efficient.";
        heroChoice = "boulder";
       } else if (weapon.classList.contains("codex-button")) {
        weaponText.textContent = "Knowledge is power, so, the more pages the better, right?";
        heroChoice = "codex";
       } else {
        weaponText.textContent = "A noble weapon, fit for the finest - and tallest - of knights!";
        heroChoice = "longsword";
       };
      console.log(heroChoice);
      getOpponentChoice();
      });
    });
    return heroChoice;
  };


function getOpponentChoice() {
  const weapons = ["boulder", "codex", "longsword"]
  let opponentChoice = weapons[(Math.floor(Math.random() * weapons.length))];
  // TEMPORARY LINES FOR DEBUG //
  let opponentTest = document.querySelector(".opponent-test");
  console.log(opponentChoice);

  switch (opponentChoice) {
    case "boulder":
       opponentIcon.classList.remove("opponent-icon");
       opponentTest.textContent = "boulder";
       break;
    case "codex":
       opponentIcon.classList.replace("opponent-icon", "codex-icon");
       opponentTest.textContent = "codex";
       break;
    case "longsword": 
       opponentIcon.classList.replace("opponent-icon", "longsword-icon");
       opponentTest.textContent = "longsword";
       break;
    };
  return opponentChoice;
};


function playRound(heroSelection, opponentSelection) { 
  heroSelection = getHeroChoice();
  opponentSelection = getOpponentChoice();

  if (heroSelection === "boulder" && opponentSelection === "longsword" ||
    heroSelection === "codex" && opponentSelection === "boulder" ||
    heroSelection === "longsword" && opponentSelection === "codex") {
      outputText.textContent = "You have triumphed over your foe!";
      // ++heroScore;      
  } else if (heroSelection == "boulder" && opponentSelection == "codex" ||
    heroSelection == "codex" && opponentSelection == "longsword" ||
    heroSelection == "longsword" && opponentSelection == "boulder") {
      outputText.textContent = "Your enemy was stronger... This time."
      // ++opponentScore;     
  } else {
    outputText.textContent = "Alas, a tie! No points this round."
  } 

  // for (round = 1; round <= 5; round++) {
  //   playRound(heroSelection, opponentSelection);
  //   const roundText = document.querySelector(".round-text");
  //   roundText.textContent = `You have won ${heroScore} rounds. Your opponent has won ${opponentScore} rounds.`;
  // }
}


 //  winner declaration at the end of all 5 rounds
//  function finishGame() {
//    const duelResult = document.querySelector(".duel-result");
//    if (heroScore > opponentScore) {
//      duelResult.textContent = "Congratulations! You showed your might and won this duel.";
//    } else if (heroScore < opponentScore) {
//      duelResult.textContent = "Your opponent proved stronger than you. Keep practicing.";
//    } else {
//      duelResult.textContent = "Alas, a tie! The victory remains unclaimed.";  
//    }
//    replayButton.style.visibility = "visible";
//  }

// function resetGame() {
//   replayButton.addEventListener("click", () => {
//     location.reload();
//   })
// }

function playGame() {

  getHeroChoice();
  playRound();
  // finishGame();
  // resetGame();
}

playGame();