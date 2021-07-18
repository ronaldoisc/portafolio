import efectAnimation from "./animationEfect.js";
import detectScrooll from "./button_up.js";
import buttonOscuro from "./dark_mode.js";
import hamburgerMenu from "./menu-hamburger.js";
import writing from "./writing_efect.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    
    hamburgerMenu("#panel-btn");

    detectScrooll(".scroll-boton");
   // writing("about-me", " Hello, I'm Ronaldo passionate of software development.");
});
efectAnimation();
buttonOscuro(".btnDark", "dark-mode");