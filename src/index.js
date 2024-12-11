import "./styles.css";
import { drawHomepage } from "./homepage.js";

alert("AAAAH!!!");

const homeButton = document.querySelector("button:nth-of-type(1)");

const content = document.getElementById("content");

drawHomepage();

homeButton.addEventListener("click", (e) => {
    console.log("Erasing content.");
    content.innerHTML = "";
    drawHomepage();
});

export { content };