let container = document.getElementById("container");

createGrid(256);

function createGrid(numberOfSquares) {
  container.style.borderLeft = "1px solid black";
  container.style.borderTop = "1px solid black";
  for (let i = 1; i <= numberOfSquares; i++) {
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