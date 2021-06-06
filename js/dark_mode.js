const d = document;
let moon = "🌙";
let sun = "☀️";
export default function buttonOscuro(btn, classDark) {

    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        $themeBtn.style.texAlign = "right";
        localStorage.setItem("theme", "dark");
    }
    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem("theme", "light");
    }
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {

            if ($themeBtn.textContent === moon) {

                darkMode();
            } else {

                lightMode();
            }
        }

    });
    d.addEventListener("DOMContentLoaded", (e) => {
        if (localStorage.getItem("theme") == null) localStorage.setItem("theme", "light");
        if (localStorage.getItem("theme") === "dark") darkMode();
        if (localStorage.getItem("theme") === "light") lightMode();

    })
}