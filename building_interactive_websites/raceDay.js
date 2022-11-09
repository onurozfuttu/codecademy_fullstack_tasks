let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
const runnerAge = 20;


if(isEarly && runnerAge >= 18){
  raceNumber+=1000;
}

if(isEarly && runnerAge >= 18){
  console.log(`Runner ${raceNumber} will race at 9:30 am.`);
}else if(!isEarly && runnerAge >= 18){
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
} else if(runnerAge < 18){
  console.log('Youth registrants run at 12:30pm (regardless of registration)');
}else{
  console.log('See the registration desk.');
}