let container = document.getElementById("container");

let btnRemoveGrid = document.getElementById("removeGrid");
btnRemoveGrid.addEventListener("click", removeGrid);

let btn16x16 = document.getElementById("btn16x16");
btn16x16.addEventListener("click", () => {
  removeGrid()
  createGrid(16, 16);
});

let btn24x24 = document.getElementById("btn24x24");
btn24x24.addEventListener("click", () => {
  removeGrid()
  createGrid(24, 24);
});

let btn40x40 = document.getElementById("btn40x40");
btn40x40.addEventListener("click", () => {
  removeGrid()
  createGrid(40, 40);
});

let btn96x96 = document.getElementById("btn96x96");
btn96x96.addEventListener("click", () => {
  removeGrid()
  createGrid(96, 96);
});

function createGrid(xAxis, yAxis) {
  container.style.gridTemplateColumns = `repeat(${xAxis}, ${960/xAxis}px)`;
  container.style.gridTemplateRows = `repeat(${yAxis}, ${960/yAxis}px)`;
  container.style.borderLeft = "1px solid black";
  container.style.borderTop = "1px solid black";
  for (let i = 1; i <= (xAxis * yAxis); i++) {
    let newSquare = document.createElement("div");
    newSquare.style.borderRight = "1px solid black";
    newSquare.style.borderBottom = "1px solid black";
    newSquare.style.boxSizing = "border-box";
    newSquare.classList.add("square");
    newSquare.addEventListener("mouseover", (event) =>
      event.target.classList.add("black-color")
    );
    container.appendChild(newSquare);
  }
}

function removeGrid() {
  container.style.borderLeft = "none";
  container.style.borderTop = "none";
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => square.remove());
}