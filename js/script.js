//GLOBAL VARIABLES
let resolution = 4;

//DOM Elements
const container = document.getElementById('container');
const resolutionButton = document.getElementById("change-resolution-button");
const box = document.getElementById('box');
const clearButton = document.getElementById('clear-button');
const root = document.documentElement;


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
    let targetElement = e.target;
    if(targetElement.id == 'box'){
        targetElement.style.backgroundColor = randomColor();
    }
}, true);

//Clear grid button
clearButton.addEventListener('click', function(){
    cleanContainer();
    renderContainer(1);

});

function randomColor(){
    rgb = "";
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//PAGE RENDER
function cleanContainer(){
    container.innerHTML = "";
}

function renderContainer(r){
    cleanContainer();
    root.style.setProperty('--resoultion-number', resolution);
    for(x = 0; x < r; x++){
        let box = document.createElement('div');
        box.setAttribute('id', 'box');
        container.appendChild(box);   
    }
}

renderContainer(resolution ** 2);

//AGRGAR HOVER: mouseover
//CADA VEZ QUE RENDERIZA LA PAGINA, borrar el grid


