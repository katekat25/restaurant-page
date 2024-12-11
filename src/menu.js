import { content, addItem } from "./index";

function drawMenu() {
    content.className = "";
    content.classList.add("menu");

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");
    content.appendChild(menuWrapper);

    addItem("menu-item", menuWrapper, "Pompompurin");
    addItem("menu-item", menuWrapper, "Hello Kitty");
    addItem("menu-item", menuWrapper, "Kuromi");
    addItem("menu-item", menuWrapper, "My Melody");
    addItem("menu-item", menuWrapper, "Keroppi");
    addItem("menu-item", menuWrapper, "Badtz-Maru");
}

export { drawMenu };