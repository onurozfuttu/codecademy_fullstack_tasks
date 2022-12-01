import { animals } from './animals';

import React from 'react';
import ReactDOM from 'react-dom';

//Hint for who is inspecting the code: Do not use the arrow function, it does not work because of hoisting.

const title = '';
const background = <img className='background' alt='ocean' src='/images/ocean.jpg' />;
const images = [];

for(const animal in animals){
  images.push(
   <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel= {animal}
    role= 'button'
    onClick={displayFact}
   />
  )
}
const animalFacts = (
<div>
<h1>
{title === '' ? 'Click an animal for a fun fact': title}
</h1>
{background}
<div className='animals'>
{images}
</div>
<p id='fact'></p>
</div>
);

function displayFact(e) {
const selectedAnimal = e.target.alt;
const animalInfo = animals[selectedAnimal];
const randomFacts = Math.floor(Math.random() * animalInfo.facts.length);
const lastFacts = animalInfo.facts[randomFacts];
document.getElementById('fact').innerHTML = lastFacts;
}

ReactDOM.render(animalFacts, document.getElementById('root'));
