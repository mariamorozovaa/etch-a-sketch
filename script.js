const btns = document.querySelector("#buttons");
const btnSetSize = document.createElement("button");
btnSetSize.textContent = "Set grid size";
btnSetSize.setAttribute("style", `width: 90px; height: 50px; background-color: pink `);

btns.appendChild(btnSetSize);
let setSize = 16;
createGrid(setSize);

btnSetSize.addEventListener("click", () => {
  setSize = prompt("Enter the size of grid (<100)", 16);

  if (setSize < 100) {
    createGrid(setSize);
  } else {
    alert("The number is more than 100 or equal. Please enter a correct number");
  }
});

function createGrid(setSize) {
  const container = document.querySelector("#container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let j = 0; j < setSize ** 2; j++) {
    const content = document.createElement("div");
    content.classList.add("square");
    content.setAttribute("style", `width: ${600 / setSize}px; height: ${600 / setSize}px;`);

    container.appendChild(content);
    content.addEventListener("mouseover", () => content.classList.add("hoverSquare")); //mousemove
  }
}
