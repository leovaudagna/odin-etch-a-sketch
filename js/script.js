let resolution = 1;

//DOM Elements
const container = document.getElementById('container');
const resolutionButton = document.getElementById("change-resolution-button");
const box = document.getElementById('box');
const root = document.documentElement;


//Event listeners
resolutionButton.addEventListener('click', function(){
    resolution = Number.parseInt(prompt("Change resolution: "));
    if(resolution == 1){
        resolution = 1;
        renderContainer(resolution);
    } else if (Number.isNaN(resolution)){
        alert("That's not a number");
        resolution = 1;
        renderContainer(resolution);
    } else {
        r = resolution** 2;
        renderContainer(r);
    }    
});

function randomColor(){

    rgb = "";

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener('mouseover', function(e){
    let targetElement = e.target;
    if(targetElement){

        targetElement.style.backgroundColor = randomColor();
    }
}, true);



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

    console.log(container.childElementCount);

    
}

console.log(randomColor());
console.log(randomColor());
console.log(randomColor());

renderContainer(resolution);

//AGRGAR HOVER: mouseover

//CADA VEZ QUE RENDERIZA LA PAGINA, borrar el grid


