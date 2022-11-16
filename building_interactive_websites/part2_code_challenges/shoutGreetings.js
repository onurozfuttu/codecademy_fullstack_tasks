// Write your code here:

const shoutGreetings = arr => {
    const firstArr = [];
    for(i=0;i<arr.length;i++){
      
      firstArr[i] = (arr[i] + '!').toUpperCase();
      //console.log(firstArr[i]);
    }
  
    return firstArr;
  }
  
  
  
  
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  
  