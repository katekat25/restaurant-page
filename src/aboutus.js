import { content, addItem } from "./index";

function drawAbout() {
    content.className = "";
    content.classList.add("about");

    const aboutWrapper = document.createElement("div");
    aboutWrapper.classList.add("about-wrapper");
    content.appendChild(aboutWrapper);

    addItem("about", "title", aboutWrapper, "About us");
    addItem("about-body", "", aboutWrapper, "Welcome to Eat Sanrio Characters, a Michelin-starred restaurant where fine dining meets the magic of Sanrio. Nestled in the heart of Tokyo, our story began when award-winning chef Hiroto Nakamura teamed up with Sanrio’s creative director, Aya Takahashi. Initially a project to design themed pastries, the collaboration quickly evolved into a full-fledged culinary journey inspired by Sanrio’s beloved characters. Chef Nakamura, known for his innovative fusion cuisine, envisioned transforming the charm of Hello Kitty, Pompompurin, and others into dishes that excite the senses and honor Japanese culinary traditions. Eat Sanrio Characters was born to bring this vision to life, offering an experience that combines artistry, nostalgia, and gourmet excellence.<br><br>Our menu reflects the personalities of Sanrio characters while celebrating the richness of Japanese flavors. From Kuromi’s bold, savory creations to My Melody’s delicate, floral-inspired desserts, each dish is a feast for the eyes and palate. The restaurant’s design enhances this magical experience, with themed dining spaces capturing the unique charm of Sanrio’s worlds. At Eat Sanrio Characters, we offer more than just a meal; we create an unforgettable experience where joy, creativity, and fine dining come together. Whether you’re a devoted fan or a curious foodie, we invite you to immerse yourself in this enchanting culinary adventure.");
    addItem("empty", "", aboutWrapper, "");
}

export { drawAbout };