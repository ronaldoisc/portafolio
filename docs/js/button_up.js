const d = document;
const w = window;
export default function detectScrooll(btn) {
   
    const $button = d.querySelector(btn);

    d.addEventListener("scroll", (e) => {


        if (w.scrollY > 300) {
            $button.classList.remove("btn-no-visible");
            $button.classList.add("btn-visible");
        }
        if (w.scrollY < 300) {
            $button.classList.add("btn-visible");
            $button.classList.add("btn-no-visible");
        }
    });
    d.addEventListener("click", (e) => {
      
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    });

}