import { getResistorOhms } from "./resistor.js";

// Bands
/* const BandZeroColor = document.querySelector('#band0');
const BandOneColor = document.querySelector('#band1');
const BandTwoColor = document.querySelector('#band2');
const BandThreeColor = document.querySelector('#band3');*/

const bands = {
    color1: 'red',   
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold' 
};

const answer = document.querySelector(".answer");

const color0 = document.querySelector("#color0");
const b0 = document.querySelector('#b0');

color0.addEventListener("click", (e) => {
    const color = e.target.className.replace("box ", "");
    
    console.log(color); 
    b0.className = `band ${color}`;
    bands.color1 = color;
    answer.innerText=getResistorOhms(bands);
  });

const color1 = document.querySelector("#color1");
const b1 = document.querySelector('#b1');


color1.addEventListener("click", (e) => {
    const color = e.target.className.replace("box ", "");
    
    console.log(color);
    b1.className = `band ${color}`;
    bands.color2 = color;
    answer.innerText=getResistorOhms(bands);
  });

const color2 = document.querySelector("#color2");
const b2 = document.querySelector('#b2');


color2.addEventListener("click", (e) => {
    const color = e.target.className.replace("box ", "");
    
    console.log(color);
    b2.className = `band ${color}`;
    bands.multiplier = color;
    answer.innerText = getResistorOhms(bands);
  });

const color3 = document.querySelector("#color3");
const b3 = document.querySelector('#b3');


color3.addEventListener("click", (e) => {
    const color = e.target.className.replace("box ", "");
    
    console.log(color);
    b3.className = `band ${color}`;
    bands.tolerance = color;
    answer.innerText = getResistorOhms(bands);
  });