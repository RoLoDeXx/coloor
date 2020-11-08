let correct; //no value assigned
let score = document.getElementById("my-score"); // score tracker
function runGame() {
  //correct randoms
  let number1 = Math.floor(Math.random() * 256);
  let number2 = Math.floor(Math.random() * 256);
  let number3 = Math.floor(Math.random() * 256);
  document.getElementById("color-numbers").textContent =
    number1 + ", " + number2 + ", " + number3;
  let btns = document.querySelectorAll(".color-btn");

  // false randoms
  for (let i = 0; i < btns.length; i++) {
    let n1 = Math.floor(Math.random() * 256);
    let n2 = Math.floor(Math.random() * 256);
    let n3 = Math.floor(Math.random() * 256);

    btns[i].style.background = "rgb(" + n1 + ", " + n2 + ", " + n3 + ")";
  }

  //make a color correct using first random triplet
  correct = Math.floor(Math.random() * 3);

  btns[correct].style.background =
    "rgb(" + number1 + ", " + number2 + ", " + number3 + ")";
}

function optionSelect(choice) {
  if (correct !== undefined) {
    if (choice === correct) {
      score.textContent = parseInt(score.textContent) + 1;
      alert("Great job 🔥");
    } else {
      alert("Better luck next time 🌈");
      score.textContent = 0;
    }

    runGame();
  }
}
