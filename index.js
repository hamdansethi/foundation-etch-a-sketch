const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Open Prompt To Adjust Number Of Boxes";
body.appendChild(button);

const grid = document.createElement("div");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.border = "1px solid black";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";
body.appendChild(grid);

function createGrid(size) {
    grid.innerHTML = ""; 
    const containerWidth = Math.min(window.innerWidth, 1200);
    const squareSize = containerWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.boxSizing = "border-box";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });

        grid.appendChild(square);
    }
}

function ask() {
    let numberOfSquares = parseInt(prompt("Enter number of squares per row and column (Between 16 and 100):"));
    if (isNaN(numberOfSquares) || numberOfSquares < 16 || numberOfSquares > 100) {
        alert("Please enter a number between 16 and 100.");
        return ask();
    }
    return numberOfSquares;
}

button.addEventListener('click', () => {
    const gridSize = ask();
    createGrid(gridSize);
});

