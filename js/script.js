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

// box.addEventListener('mouseover', (e)=>{
//     e.target.style.backgroundColor = 'blue';
// });

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

let listBoxes = container.childNodes;
console.log(listBoxes);
for(box in listBoxes){
    box.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = "red";
    })
}

renderContainer(resolution);

//AGRGAR HOVER: mouseover

//CADA VEZ QUE RENDERIZA LA PAGINA, borrar el grid


