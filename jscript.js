let container = document.querySelector(".container");

function createGrid() {
for (let i=0; i<16*16; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
    }
}

createGrid();

let number = null;

let btn = document.querySelector("button")
btn.onclick = function () {
    while (number === null || isNaN(number) || number < 0 || number > 100) {
        number = prompt("How many squares do you want in your grid? (0-100)");
        if (number === null) {
            alert("You canceled or closed the prompt.");
            break;
        }

        number = parseInt(number);

        if (isNaN(number) || number < 0 || number > 100) {
            alert("Invalid number.");
        }
    }
    
    container.innerHTML = "";

    let itemSize = (960 / number) + "px";

    for (let i = 0; i < number* number; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = itemSize;
        gridItem.style.height = itemSize;
        container.appendChild(gridItem);
    }
}