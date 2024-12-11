import "./styles.css";
import { drawHomepage } from "./homepage.js";
import { drawMenu } from "./menu.js";

alert("AAAAH!!!");

const homeButton = document.querySelector("button:nth-of-type(1)");
const menuButton = document.querySelector("button:nth-of-type(2)");
const aboutButton = document.querySelector("button:nth-of-type(3)");
const contactButton = document.querySelector("button:nth-of-type(4)");

const content = document.getElementById("content");

drawHomepage();

homeButton.addEventListener("click", () => {
    drawPage(drawHomepage);
});

menuButton.addEventListener("click", () => {
    drawPage(drawMenu);
})

function drawPage(pageFunction) {
    console.log("Erasing content.");
    content.innerHTML = "";
    pageFunction();
}

function addItem(classToAdd, appendTo, innerHTML, type = "div") {
    const newElement = document.createElement(type);
    newElement.classList.add(classToAdd);
    newElement.innerHTML = innerHTML;
    appendTo.appendChild(newElement);
}

export { content, addItem };