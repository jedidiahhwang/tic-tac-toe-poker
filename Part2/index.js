// Check to see that the files are linked

console.log("The house always wins!");

const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

console.log(idInput);
console.log(colorInput);

function setCard () {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset() {
    
}