const startGame = document.getElementById("startgame");
const gameControl = document.getElementById("gamecontrol");
const game = document.getElementById("game");
const score = document.getElementById("score");
const actionArea = document.getElementById("actions");

const gameData = {
  dice: [
    "1die.jpg",
    "2die.jpg",
    "3die.jpg",
    "4die.jpg",
    "5die.jpg",
    "6die.jpg",
  ],
  players: ["player1", "player2"],
  score: [0, 0],
  roll1: 0,
  roll2: 0,
  rollSum: 0,
  index: 0,
  gameEnd: 29,
};

startGame.addEventListener("click", () => {
  console.log("Hello");
  gameData.index = Math.round(Math.random());
  gameControl.innerHTML = `<h2>The game has started</h2>`;
  gameControl.innerHTML += '<button id="quit">Do you want to quit</button>';

  document.getElementById("quit").addEventListener("click", () => {
    window.location.reload();
  });
  setUpTurn();
});

const setUpTurn = () => {
  actionArea.innerHTML = '<button id="roll">Roll the dice!</button>';
  document.getElementById("roll").addEventListener("click", () => {
    throwDice();
  });
};

const throwDice = () => {
  actionArea.innerHTML = "";
  gameData.roll1 = Math.floor(Math.random() * 6) + 1;
  gameData.roll2 = Math.floor(Math.random() * 6) + 1;
  console.log("zar", gameData.roll1);
  console.log("This is for picture", gameData.dice[gameData.roll2 - 1]);
  game.innerHTML = `<p>Roll the dice for ${
    gameData.players[gameData.index]
  } </p>`;
  game.innerHTML += `<img src="./src/images/${
    gameData.dice[gameData.roll1 - 1]
  }" alt="dice">`;
  game.innerHTML += `<img src="./src/images/${
    gameData.dice[gameData.roll2 - 1]
  }" alt="dice2">`;
  gameData.rollSum = gameData.roll1 + gameData.roll2;
  console.log("sum", gameData.rollSum);

  if (gameData.rollSum === 2) {
    game.innerHTML += "<p> Oh snap! You got snake eyes!</p>";
    gameData.score[gameData.index] = 0;
    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
    setTimeout(setUpTurn, 2000);
  } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
    game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
      gameData.players[gameData.index]
    }</p>`;
    setTimeout(setUpTurn, 2000);
  } else {
    gameData.score[gameData.index] =
      gameData.score[gameData.index] + gameData.rollSum;
    actionArea.innerHTML =
      '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

    document.getElementById("rollagain").addEventListener("click", () => {
      setUpTurn();
    });

    document.getElementById("pass").addEventListener("click", () => {
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      setUpTurn();
    });
  }
};
