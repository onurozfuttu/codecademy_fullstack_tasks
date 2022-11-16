// Write your code here:

const justCoolStuff = (arr1, arr2) => {
    const lastArr = []
    const testWords = arr1.filter(el=> {arr2.filter(el2=> {if(el === el2){lastArr.push(el2);}
    })}
     );
     return lastArr;
  }
  
  
  
  
  
  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
  