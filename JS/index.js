const body = document.querySelector('body');
const container = document.querySelector('.container');
const newDiv = document.createElement('div');
newDiv.classList.add('box');


//Fills grid with boxes
function makeDiv() {
    for (let i = 0; i < 256; i++) {
        container.appendChild(newDiv.cloneNode(true));  //cloning is needed because element originally created can only be at one place.
    }
} 

//returns a random color
const randomizeColor = function (e) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    e.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//Listens to mouse hover and then prompt a function
function hover() {
    let divs = document.querySelectorAll('.box');
    divs.forEach(div => div.addEventListener('mouseover', e => {
        //console.log(e.target); //Same value as obtained from querySelector
        randomizeColor(e.target);
    }));    
}

//Resets the grid
function resetGrid(){
    //While there is a firstChild, remove from lastChild
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makeDiv();
    hover();
    resetListen();
}
    
   


//Listens to reset button click
function resetListen() {
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', resetGrid);
}

makeDiv();
hover();
resetListen();

