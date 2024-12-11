import "./styles.css";

alert("AAAAH!!!");
const content = document.getElementById("content");

const textWrapper = document.createElement("div");
textWrapper.classList.add("text-wrapper");
content.appendChild(textWrapper);

addItem("small", textWrapper, "You can eat them.");
addItem("big", textWrapper, "Eat Sanrio Characters.");
addItem("footer", content, "Made by Kate Schumacher");

function addItem(classToAdd, appendTo, text, type="div") {
    const newElement = document.createElement(type);
    newElement.classList.add(classToAdd);
    newElement.textContent = text;
    appendTo.appendChild(newElement);
}

