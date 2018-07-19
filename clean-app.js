let max = 80;

const betBtn = document.querySelector("#bet-btn");
const game = document.querySelector("#game");
const message = document.querySelector(".message");
const balls = document.querySelectorAll(".ball");
const pickedBalls = document.querySelector(".wrapper1");
const accBalance = document.querySelector(".balance");
const deposit = document.querySelector("#deposit");
const geld = document.querySelector(".form1");
const p = document.querySelector(".p");

let ballsIds = [];
let betInput = [];
let balanceOutput = [];
let nums = ranNum("numbers");

console.log(nums);
console.log(ballsIds);
console.log(betInput);

balls.forEach(ball => {
  ball.addEventListener("click", ids);
});

// depositBtn.addEventListener("click", depositBank);
betBtn.addEventListener("click", betBtnFn);
game.addEventListener("mousedown", reload);

function betBtnFn(e) {
  let guess = parseInt(ballsIds);

  let filteredNums = ballsIds.filter(e => {
    return nums.indexOf(e) > -1;
  });

  bet();
  console.log(filteredNums);

  if (filteredNums.length === 3 && ballsIds.length === 3) {
    gameOver(true, `Congratulations!!!`),
      balanceOutput.push(parseInt((betInput *= 65))),
      (deposit.value = "");
  } else if (filteredNums.length === 4 && ballsIds.length === 4) {
    gameOver(true, `Congratulations!!!`),
      balanceOutput.push((betInput *= 275)),
      (deposit.value = "");
  } else if (filteredNums.length === 5 && ballsIds.length === 5) {
    gameOver(true, `Congratulations!!!`),
      balanceOutput.push((betInput *= 1350)),
      (deposit.value = "");
  } else if (filteredNums.length === 6 && ballsIds.length === 6) {
    gameOver(true, `Congratulations!!!`),
      (balanceOutput.push((betInput *= 6500)).deposit.value = "");
  } else if (filteredNums.length === 7 && ballsIds.length === 7) {
    gameOver(true, `Congratulations!!!`),
      balanceOutput.push((betInput *= 25000)),
      (deposit.value = "");
  } else if (filteredNums.length === 8 && ballsIds.length === 8) {
    gameOver(true, `Congratulations!!!`),
      balanceOutput.push((betInput *= 125000)),
      (deposit.value = "");
  } else if (isNaN(guess) || guess === "" || ballsIds.length < 3) {
    setMessage(`Please click on the ball`, "orange");
  } else {
    gameOver(false, `Better luck next time.`),
      (balanceOutput = "0"),
      (deposit.value = "");
  }

  colors();

  if (ballsIds.length >= 3) {
    accBalance.value = balanceOutput;
  }

  e.preventDefault();
}

function bet() {
  betInput.push(parseInt(deposit.value));

  if (isNaN(betInput)) {
    betInput.pop();
  } else if (betInput === "") {
    betInput.pop();
  } else {
    betInput.push(parseInt(deposit.value));
  }

  betInput.length >= 2 ? betInput.pop() : betInput;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  setMessage(msg, color);

  betBtn.value = "Play Again?";
  betBtn.className += "play-again";
}

function reload(e) {
  if (e.target.className === "btn btn-dark btn-block play-again") {
    window.location.reload();
  }
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// function balance() {
//   const a = document.createElement("div");
//   a.className += "input-group";
//   a.innerHTML = `<input type="number" class="form-control mx-auto balance" id="balance" placeholder="${balanceOutput}" >`;
//   a.className += " mx-auto";
//   a.style.width = "200px";
//   geld.replaceChild(a, accBalance);
// }

function colors() {
  console.log(betBtn.value);
  let filteredNums = ballsIds.filter(e => {
    return nums.indexOf(e) > -1;
  });

  // Adding color for nums (20 random balls) and for filteredNums
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.backgroundColor = "white";
    balls[i].style.color = "#3d3c3a";

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == parseInt(balls[i].innerHTML)) {
        balls[i].style.backgroundColor = "#ff1a1a";
        balls[i].style.color = "white";
      }
    }

    for (let j = 0; j < ballsIds.length; j++) {
      if (ballsIds[j] == parseInt(balls[i].innerHTML)) {
        balls[i].style.backgroundColor = "yellow";
        balls[i].style.color = "red";
      }
    }

    // Condition so it would not reveal nums if ballsIds.length < 3
    if (ballsIds.length < 3) {
      for (let i = 0; i < balls.length; i++) {
        balls[i].style.backgroundColor = "white";
        balls[i].style.color = "#3d3c3a";

        for (let j = 0; j < ballsIds.length; j++) {
          if (ballsIds[j] == parseInt(balls[i].innerHTML)) {
            balls[i].style.backgroundColor = "yellow";
            balls[i].style.color = "red";
          }
        }
      }
    } else {
      for (let j = 0; j < filteredNums.length; j++) {
        if (filteredNums[j] == parseInt(balls[i].innerHTML)) {
          balls[i].style.backgroundColor = "green";
          balls[i].style.color = "white";
        }
      }
    }
  }
}

function ids(e) {
  // Creates the ball in the UI
  const a = document.createElement("a");
  a.innerHTML = `<p class="ball animated bounceIn" id="${this.id + 10}">${
    this.id
  }</p>`;

  if (betBtn.value === "Play Again?") {
    pickedBalls.appendChild(a).remove();
    return;
  }

  if (ballsIds.includes(parseInt(this.id))) {
    let index = ballsIds.indexOf(parseInt(this.id));
    if (index > -1) {
      ballsIds.splice(index, 1);
    }

    let chosenBall = document.getElementById(this.id + 10);
    chosenBall.parentNode.removeChild(chosenBall);
  } else {
    ballsIds.push(parseInt(this.id)), pickedBalls.appendChild(a);
  }

  if (ballsIds.length >= 9) {
    pickedBalls.appendChild(a).remove();
  }

  // console.log(a.children[0].id);

  // Stops adding ids in ballsIds
  ballsIds.length >= 9 ? ballsIds.pop() : ballsIds;

  userBalls();
  e.preventDefault();
}

function userBalls() {
  // Chosen balls colors
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.backgroundColor = "white";
    balls[i].style.color = "#3d3c3a";

    for (let j = 0; j < ballsIds.length; j++) {
      if (ballsIds[j] == parseInt(balls[i].innerHTML)) {
        balls[i].style.backgroundColor = "yellow";
        balls[i].style.color = "red";
      }
    }

    if (betBtn.value === "Play Again?") {
      return;
    }
  }
}

function ranNum() {
  let numbers = [];

  while (numbers.length < 20) {
    let random = Math.floor(Math.random() * max) + 1;

    if (numbers.indexOf(random) == -1) {
      numbers.push(random);
    }
  }

  //sort numbers in array

  numbers.sort(function(a, b) {
    return a - b;
  });

  return numbers;
}

(function myAnim() {
  balls.forEach(ball => {
    ball.addEventListener("click", function() {
      animate(`${this.id}`, "bounceIn");

      return false;
    });
  });

  function animate(element, animation) {
    document.getElementById(element).classList.add("animated");
    document.getElementById(element).classList.add(animation);
    let wait = setTimeout(function() {
      document.getElementById(element).classList.remove("animated");
      document.getElementById(element).classList.remove(animation);
    }, 150);
  }
})();
