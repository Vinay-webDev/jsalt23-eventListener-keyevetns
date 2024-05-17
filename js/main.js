// eventListener

/*
document.addEventListener("keydown", event => {
    console.log(`key down = ${event.key}`);
})

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
})*/

const myBox = document.getElementById("myBox");

const moveAmount = 10;
let y = 0;
let x = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "cyan";
})

document.addEventListener("keydown", event => {
    
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown": 
                y += moveAmount;
                break;
            case "ArrowLeft": 
                x -= moveAmount;
                break;
            case "ArrowRight": 
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})





