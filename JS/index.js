const body = document.querySelector('body');
const container = document.querySelector('.container'); //ParentNode of divs
const newDiv = document.createElement('div');
newDiv.classList.add('box'); //Adds borders

//Fills grid with boxes
function makeDiv(inputGrid) {
    for (let i = 0; i < inputGrid; i++) {
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
    return userInput();
}
    
//Gets user input and changes grid-template-colums/rows
function userInput() {
    let userInput = parseInt(prompt('Type a number between 1 to 100'));
    if (userInput >= 1 && userInput <= 100){
        makeDiv(Math.pow(userInput, 2)); //Make new divs with inputted number to the power of 2. (columns x rows) 
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    return hover();
    }
    else if (!userInput){
        alert('We are closed');
        return;
    }
    else {
        alert('I humbly ask you to type a number BETWEEN 1 to 100');
        return resetGrid(); //Start over again
    }
}
   
//Listens to reset button click
function resetListen() {
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', resetGrid);
}

makeDiv(256); //Default grid number
hover();
resetListen();

