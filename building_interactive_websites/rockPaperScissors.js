console.log('hi');

const getUserChoice = (userInput= 'rock') => {
  console.log('Welcome to the game. Pick rock, paper or scissors!');
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else console.log('You didnt make the right choice');
}

//getUserChoice('truck');

const getComputerChoice = () => {
  const randomNum =Math.floor(Math.random()*3);
  if(randomNum === 0){
    return 'rock';
  }else if(randomNum === 1){
    return 'paper';
  } else return 'scissors';
}


const determineWinner = (userChoice, computerChoice) => {

  if(userChoice === computerChoice){
    return 'Game is a tie';
  }
  
  else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else return 'You won';
    }

  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won';
    }else return 'You won';
  }

  else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won';
    }else return 'You won';
  }

  else if(userChoice === 'bomb'){
    return 'You WON!'
  }


}

const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`Your choice is ${userChoice} and computers choice is ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

