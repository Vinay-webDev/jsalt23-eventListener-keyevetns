// eventListener

/*
document.addEventListener("keydown", event => {
    console.log(`key down = ${event.key}`);
})

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
})*/

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "cyan";
})






