import { content } from "./index";

function drawHomepage() {
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    content.appendChild(textWrapper);

    addItem("small", textWrapper, "You can eat them.");
    addItem("big", textWrapper, "Eat Sanrio Characters.");

    function addItem(classToAdd, appendTo, text, type = "div") {
        const newElement = document.createElement(type);
        newElement.classList.add(classToAdd);
        newElement.textContent = text;
        appendTo.appendChild(newElement);
    }
}

export { drawHomepage };
