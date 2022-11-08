/* 
- 8 years in a human’s life equates to 45 years in a dog’s life.
- The first two years of a dog’s life count as 10.5 dog years each.
- Each year following equates to 4 dog years. 
*/

// Your age
let myAge = 35;

// - The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2 * 10.5;

// After 2 years calculation will be different
let laterYears = myAge - 2;

laterYears *= 4;

console.log(`Test early year ${earlyYears} and later year ${laterYears}`);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Onur'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);