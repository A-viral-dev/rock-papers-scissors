let log = n => {
  console.log(n);
};
// Create an array of three results
const resultArr = ["rock", "paper", "scissors"];
// 1. Selection

// 1.1 computer slects
let compSelection = () => {
  let index = Math.floor(Math.random() * 3);
  return resultArr[index];
};

// 1.2   player selects
let playerSelection = round =>
  prompt(
    `Round ${round} \r\nPlease choose your hand!!`,
    "rock || paper || scissors"
  ).toLowerCase();

// write game logic which takes both selection
let gameLogic = (playerSelection, compSelection) => {
  let a = "";
  // rock>scissors =  rock crushes scissors
  // paper>rock =     paper covers rock
  // scissors>paper = scissors cuts paper
  // player selects rock
  playerSelection === "rock"
    ? compSelection === "scissors"
      ? (a = "You Win! rock crushes scissors")
      : compSelection === "paper"
      ? (a = "You lose! paper covers rock")
      : (a = "It's a Draw!")
    : // player selects scissors
    playerSelection === "scissors"
    ? compSelection === "paper"
      ? (a = "You Win! scissors cuts paper")
      : compSelection === "rock"
      ? (a = "You lose! rock crushes scissors")
      : (a = "It's a Draw!")
    : // player selects paper
    playerSelection === "paper"
    ? compSelection === "rock"
      ? (a = "You Win! paper covers rock")
      : compSelection === "scissors"
      ? (a = "You lose! scissors cuts paper")
      : (a = "It's a Draw!")
    : (a = "It's not a valid selection! You lose!!  ");
  return a;
};

// call game logic 5 times with  player selection and computer selection;
for (let i = 0; i < 5; i++) {
  alert(gameLogic(playerSelection(i + 1), compSelection()));
}
// declare the winner with winning reason/phrase
