// eventListener

/*
document.addEventListener("keydown", event => {
    console.log(`key down = ${event.key}`);
})

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
})*/

const myBox = document.getElementById("myBox");

const moveAmount = 20;
let a = 0;
let b = 0;

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

        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                a -= moveAmount;
                break;
            case "ArrowDown": 
                a += moveAmount;
                break;
            case "ArrowLeft": 
                b -= moveAmount;
                break;
            case "ArrowRight": 
                b += moveAmount;
                break;
        }
        myBox.style.top = `${a}px`;
        myBox.style.left = `${b}px`;
    }
})


