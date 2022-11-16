// Write your code here:

const convertToBaby = arrBaby => {
    const newArrBaby = [];
    for(i=0; i<arrBaby.length;i++){
      
      newArrBaby[i] = 'baby ' + arrBaby[i];
    }
    return newArrBaby;
  }
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  