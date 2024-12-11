import { content, addItem } from "./index";

function drawMenu() {
    content.className = "";
    content.classList.add("menu");

    addItem("menu-title", content, "Menu");

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");
    content.appendChild(menuWrapper);

    addItem("menu-item", menuWrapper, "Pompompurin <br> Custard risotto, heavy cream, parmesan, banana, hazelnut, vanilla bean, gold leaf <br> 28");
    addItem("menu-item", menuWrapper, "Hello Kitty <br> Wagyu beef teriyaki, sakura-shaped ahi tuna sushi, tsukemono, strawberry daifuku <br> 35");
    addItem("menu-item", menuWrapper, "Kuromi <br> Squid ink pasta, miso-glazed pork belly, black garlic, side of black sesame mousse <br> 33");
    addItem("menu-item", menuWrapper, "My Melody <br> Raspberry compote tart, cream cheese filling, lavender extract, edible flowers <br> 25");
    addItem("menu-item", menuWrapper, "Keroppi <br> Green tea ochazuke, shrimp, avocado, yuzu extract, side of matcha panna cotta <br> 30");
    addItem("menu-item", menuWrapper, "Badtz-Maru <br> Spicy chicken patty on a charcoal brioche bun, Kewpie wasabi aioli, pickles jalapeños <br> 27");
}

export { drawMenu };