let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = num => {
  const randomNum = Math.floor(Math.random()*10);
  return randomNum;
}

const compareGuesses = (playerGuess, pcGuess, secretNum) => {
  const playerGuessDifference = Math.abs(secretNum - playerGuess);
  const pcGuessDifference = Math.abs(secretNum - pcGuess);
  if(playerGuessDifference <= pcGuessDifference){
    return false;
  }else return true;
}

const updateScore = winningNum => {
  if(winningNum === 'human'){
    humanScore++;
  }else if(winningNum === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}