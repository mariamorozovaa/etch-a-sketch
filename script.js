const container = document.querySelector("#container");

const btns = document.querySelector("#buttons");
const btnSetSize = document.createElement("button");
btnSetSize.textContent = "Set grid size";
btns.appendChild(btnSetSize);
let setSize = 16;
createGrid(setSize);

btnSetSize.addEventListener("click", () => {
  setSize = prompt("Enter the size of grid (<100)");

  if (setSize < 100) {
    createGrid(setSize);
  } else {
    alert("The number is more than 100 or equal. Please enter a correct number");
  }
  // for (let i = 0; i < setSize; i++) {
  //   for (let j = 0; j < setSize; j++) {
  //     container.removeChild(content);
  //   }
  // }
});

function createGrid(setSize) {
  for (let i = 0; i < setSize; i++) {
    for (let j = 0; j < setSize; j++) {
      const content = document.createElement("div");
      content.classList.add("square");
      content.setAttribute("style", `width: ${600 / setSize}px; height: ${600 / setSize}px;`);

      container.appendChild(content);
      content.addEventListener("mouseover", () => content.classList.add("hoverSquare")); //mousemove
    }
  }
}
