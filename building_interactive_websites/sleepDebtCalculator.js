const getSleepHours = (day) =>{
    if(day==='monday'){
      return 8;
    }else if(day==='tuesday'){
      return 7;
    }else if(day==='wednesday'){
      return 6;
    }else if(day==='thursday'){
      return 7;
    }else if(day==='friday'){
      return 7;
    }else if(day==='saturday'){
      return 8;
    }else if(day==='sunday'){
      return 8;
    }
  }
  
  /*const test= getSleepHours('saturday');
  console.log(test);*/
  
  const getActualSleepHours = () =>{
    const totalSleep = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return totalSleep;
  }
  
  const getIdealSleepHours = () => {
   const idealHours = 7 * 7;
   return idealHours;
  }
  
  //console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed.'+ ` You should sleep ${actualSleepHours - idealSleepHours} hours less.`);
    }else if(actualSleepHours < idealSleepHours){
      console.log('You should get some rest.' + ` You should sleep ${idealSleepHours - actualSleepHours} more.`);
    }
  }
  
  calculateSleepDebt();
  
  