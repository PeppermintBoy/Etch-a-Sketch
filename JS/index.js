const container = document.querySelector('.container');
const newDiv = document.createElement('div');
newDiv.classList.add('box');


//Fill grid with boxes
function makeDiv() {
    for (let i = 0; i < 256; i++) {
        container.appendChild(newDiv.cloneNode(true));  //cloning is needed because element originally created can only be at one place.
    }
} 

//return a random color
function randomizeColor(e) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r}, ${g}, ${b})`;
    e.style.backgroundColor = color;
    console.log(r);
}

//Listens to mouse hover and then prompt a function
function hover() {
    const divs = document.querySelectorAll('.box');
    divs.forEach(div => div.addEventListener('mouseover', e => {
        //console.log(e.target); //Same value as obtained from querySelector
        randomizeColor(e.target);
    }));    
}

makeDiv();
hover();

