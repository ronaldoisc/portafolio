import detectScrooll from "./button_up.js";
import buttonOscuro from "./dark_mode.js";
import writing from "./writing_efect.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {

    detectScrooll(".scroll-boton");
    writing("about-me", " Hello, I'm Ronaldo passionate of software development.");
});
buttonOscuro(".btnDark", "dark-mode");