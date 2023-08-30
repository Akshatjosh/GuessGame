"use strict";
//Guess number generator
let guessNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;
//event listner and event handler of game logic
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guessNumber").value);

  //when no number is input
  if (!inputNumber) {
    document.querySelector(".guess-p").textContent = "⛔ No Number";
  }
  //when guess matched
  else if (inputNumber === guessNumber) {
    document.querySelector(".guess-p").textContent = "🎉  Correct Answer";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".randomNumber").style.width = "140px";
    document.querySelector(".randomNumber").textContent = guessNumber;
    //High score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is not equal
  else if (inputNumber !== guessNumber) {
    if (score > 1) {
      document.querySelector(".guess-p").textContent =
        inputNumber > guessNumber ? "📈  TOO High" : "📉  TOO Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-p").textContent = "💥 Game Over";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
//event listner and event handler of reset
document.querySelector(".reset-btn").addEventListener("click", function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".guessNumber").value = "";
  document.querySelector(".guess-p").textContent = "Start Guessing ...";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".randomNumber").style.width = "100px";
  document.querySelector(".randomNumber").textContent = "?";
  document.querySelector(".score").textContent = score;
});
