function makeDiv() {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('box');
    for (let i = 0; i < 256; i++) {
        container.appendChild(div.cloneNode(true));  //cloning is needed because element originally created can only be at one place.
    }
} 

makeDiv();

