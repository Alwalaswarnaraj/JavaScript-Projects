let number = parseInt(Math.random() * 100 + 1);
console.log(number);

const submit = document.querySelector(".submit  ");
console.log(submit.value);

const userInput = document.querySelector("#number");

const guesSlot = document.querySelector(".prev-gues");
const remainingGuess = document.querySelector(".last-res");
const lowOrHi = document.querySelector(".lowOrHi");
const result = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(`inside the addEvent ${guess}`);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess <= 0 || isNaN(guess) || guess > 100) {
    alert(`Enter Valid Number ${guess}`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random  number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === number) {
    displayMessage(`YOU WON THE GAME`);
    endGame();
  } else if (guess < number) {
    displayMessage(`Number is TOOO LOW`);
  } else if (guess > number) {
    displayMessage(`Number id TOOO HIGH`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//   document.body.main.removeChild(result)
  result.append(p);
  playGame = false;
  startGame()
}

function startGame() {
  console.log("startGame");
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesSlot.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    result.removeChild(p);

    playGame = true;
  });
}
