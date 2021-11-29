let log = n => {
  console.log(n);
};
// Create an array of three results
let resultArr = ["rock", "paper", "scissors"];
// create a function which gives an item from above array randomly using math.random

let randomResult = () => {
  let index = Math.floor(Math.random() * 3);
  return resultArr[index];
};

// call above function and assign to a variable
compSelection = randomResult();

// log the variable

log(compSelection);

// Ask the player for his selection
let playerSelection = "";
playerSelection = prompt(
  "Please choose your hand!!",
  "rock || paper || scissors"
);

// convert to lower case
playerSelection = playerSelection.toLowerCase();
log(playerSelection);

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
      ? (a = "you Win! scissors cuts paper")
      : compSelection === "rock"
      ? (a = "You lose! rock crushes scissors")
      : (a = "It's a Draw!")
    : // player selects paper
    playerSelection === "paper"
    ? compSelection === "rock"
      ? (a = "you Win! paper covers rock")
      : compSelection === "scissors"
      ? (a = "You lose! scissors cuts paper")
      : (a = "It's a Draw!")
    : (a = "It's not a valid selection! You lose!!  ");
  return a;
};

// call game logic with  player selection and computer selection;
// declare the winner with winning reason/phrase
alert(gameLogic(playerSelection, compSelection));
