import { content, addItem } from "./index";

function drawHomepage() {
    content.className = "";
    content.classList.add("homepage");

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    content.appendChild(textWrapper);

    addItem("small", textWrapper, "You can eat them.");
    addItem("big", textWrapper, "Eat Sanrio Characters.");
}

export { drawHomepage };
