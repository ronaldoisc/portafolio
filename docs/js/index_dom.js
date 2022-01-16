import efectAnimation from "./animationEfect.js";
import animations from "./animations.js";
import detectScrooll from "./button_up.js";
import buttonOscuro from "./dark_mode.js";
import hamburgerMenu from "./menu-hamburger.js";


const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    
    
    detectScrooll(".scroll-boton");
    // writing("about-me", " Hello, I'm Ronaldo passionate of software development.");
});
hamburgerMenu(".panel-btn");
animations(".card2");
efectAnimation();
buttonOscuro(".btnDark", "dark-mode");