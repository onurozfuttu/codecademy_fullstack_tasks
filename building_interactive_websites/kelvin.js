let kelvin = 293;
// this is kelvin
let celsius = kelvin - 273;
// celsius is 273 degrees less than kelvin
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);