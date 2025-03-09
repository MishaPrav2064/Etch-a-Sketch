const container = document.querySelector(".container")
const styleContainer = window.getComputedStyle(container)

const containerWidth = parseFloat(styleContainer.width)
const containerHeight = parseFloat(styleContainer.height)

changeSize(16)

const buttonSize = document.querySelectorAll(".buttonSize")

for (let i = 0; i < buttonSize.length; i++) {
    const sizeValue = buttonSize[i].value
    if (sizeValue === "custom") {
        buttonSize[i].addEventListener("click",customSize)
    } else if (sizeValue === "resetSize") {
        buttonSize[i].addEventListener("click",() => changeSize(16))
    } else if (sizeValue === "resetColor"){
        buttonSize[i].addEventListener("click",resetColor)
    } else {
        buttonSize[i].addEventListener("click",() => changeSize(sizeValue))
    }
}

function customSize() {
    let newSize = parseInt(prompt("Enter custom size (Max 100)", ""));
    if (newSize === undefined || newSize === null || newSize < 1 || newSize > 100) {
        alert("Error")
    } else {
        changeSize(newSize)
    }
}

function changeSize(size) {
        container.replaceChildren();

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = (containerWidth / size) + "px";
        square.style.height = (containerHeight / size) + "px";
        square.style.border = ((containerWidth / size) / 20) + "px solid lightgray";
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.classList.add("hovered")
        })

        container.appendChild(square);
    }
}

function resetColor() {
    const square = document.querySelectorAll(".square")

    square.forEach((square) => square.classList.remove("hovered"))
}