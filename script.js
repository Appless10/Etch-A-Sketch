let container = document.querySelector("#container");
let newGridButton = document.querySelector("#newGrid");
let gridSquares = 16;

displayGrid(16);

newGridButton.addEventListener("click", () => {
  let inputLoop = true;
  while (inputLoop == true ){
  let gridSquaresText = prompt("Enter squares per row/column (Max 100)");
  gridSquares = Number(gridSquaresText);
  if (gridSquares < 100) {
    inputLoop = false;
  }
  }
  container.innerHTML = "";
  displayGrid(gridSquares);

});

function displayGrid(gridSquares){
for (let i = 1; i <= gridSquares; i++) {
 for (let j = 1; j <= gridSquares; j++){ 
     
     let element = document.createElement("div");
     let width = 450 / gridSquares;
     element.style.width = `${width}px`;
     element.style.height = `${width}px`;
     
     container.appendChild(element); 
     element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "black";
      });
     
 }
 
 
}
}
