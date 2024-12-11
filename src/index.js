import backgroundImg from "./assets/purin.jpg";

alert("AAAAH!!!");
const content = document.getElementById("content");

const textContainer = document.createElement("div");
textContainer.classList.add("text-wrapper");
content.appendChild(textContainer);

const smallText = document.createElement("div");
smallText.classList.add("title-text", "small");
smallText.textContent = "You can eat them";
textContainer.appendChild(smallText);

const bigText = document.createElement("div");
bigText.classList.add("title-text", "big");
bigText.textContent = "Eat Sanrio Characters."
textContainer.appendChild(bigText);

const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "Made by Kate Schumacher";
content.appendChild(footer); 
