const input = "What does the fox say";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let i=0;i<input.length;i++){
 // console.log(i, input[i]);
 if(input[i]==='e'||input[i]==='u'){
   resultArray.push(input[i]);
 }
 for(let q=0;q<vowels.length;q++){
   //console.log(q, vowels[q]);
   if(input[i]===vowels[q]){
     resultArray.push(input[i]);
     
   }
   
   
 }
}

//console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(`Whale says: ${resultString}`);


