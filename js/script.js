//GLOBAL VARIABLES
let resolution = 4;
let brightness = 1;

let lang = 'uk';

//DOM Elements
const container = document.getElementById('container');
const resolutionButton = document.getElementById("change-resolution-button");
const box = document.getElementById('box');
const clearButton = document.getElementById('clear-button');
const root = document.documentElement;
const ukFlag = document.getElementById('uk');
const spanishFlag = document.getElementById('es');
const titlePage = document.querySelector('h1');
const languajeDiv = document.getElementById('languaje');



//Event listeners //
//Change resolution grid button
resolutionButton.addEventListener('click', function(){
    let isNotValid = true;
    while(isNotValid) {          
        resolution = Number.parseInt(prompt("Change resolution: "));
        if(resolution == 1){
            resolution = 1;
            isNotValid = false;
            renderContainer(resolution);            
        } else if (Number.isNaN(resolution)){
            alert("That's not a number");
            isNotValid = true;
            // resolution = 1;
            // renderContainer(resolution);
        } else if (resolution > 100 || resolution < 1){
            alert("That's not a valid number. Please enter a number between 1 and 100");
            isNotValid = true;
        } else {
            r = resolution** 2;
            isNotValid = false;
            renderContainer(r);
        }    
    } 
});

//Change boxes color
container.addEventListener('mouseover', function(e){
    let newRandomColor = randomColor();
    let targetElement = e.target;
    if(targetElement.id == 'box'){
        targetElement.style.backgroundColor = newRandomColor;
        targetElement.style.filter = `brightness(${brightness})`;
        brightness -= 0.10;
        brightness = (Math.round(brightness * 100) / 100).toFixed(2)
        if(brightness == 0){
            brightness = 1;
        }      
    }
}, true);

//Clear grid button
clearButton.addEventListener('click', function(){
    cleanContainer(resolution ** 2);
});

//Random color function
function randomColor(){
    rgb = "";
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//PAGE RENDER
function cleanContainer(r){
    container.innerHTML = "";
    renderContainer(r);
}

function renderContainer(r){
    container.innerHTML = "";
    root.style.setProperty('--resoultion-number', resolution);
    for(x = 0; x < r; x++){
        let box = document.createElement('div');
        box.setAttribute('id', 'box');
        container.appendChild(box);   
    }
}

//Change languaje
ukFlag.addEventListener('click', function(){
    clearButton.innerText = "Clear";
    resolutionButton.innerText = "Change Resolution";
    titlePage.innerText = "Etch-A-Sketch";
    spanishFlag.style.filter = 'brightness(0.5)';
    ukFlag.style.filter = 'brightness(1)';
    lang = 'uk';    
})

spanishFlag.addEventListener('click', function(){
    clearButton.innerText = "Limpiar";
    resolutionButton.innerText = "Cambiar Resolución";
    titlePage.innerText = "Dibujo!"; 
    spanishFlag.style.filter = 'brightness(1)';
    ukFlag.style.filter = 'brightness(0.5)';
    lang = 'es';    
})

ukFlag.addEventListener('mouseover', function(e){
    e.target.style.filter = 'brightness(0.8)';
})

ukFlag.addEventListener('mouseout', function(e){
    e.target.style.filter = 'brightness(0.5)';
})






renderContainer(resolution ** 2);
