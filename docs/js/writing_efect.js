const d = document;
const w = window;

export default function writing(classText, texto) {
    const $h1 = d.getElementById(classText);
    const $sobreMi = d.getElementById("sobre-mi");
    const $title1=document.querySelector(".title1");

    let cadena = texto.split('');
    let i = 0

    $sobreMi.addEventListener("click", e => {
      
        setTimeout(() => {
            $title1.classList.add("animate__rotateInDownRight");
        }, 50);
      
        const efectoMaquina = setInterval(() => {

            if (cadena[i] === ' ') {
                $h1.textContent += cadena[i];
                $h1.textContent += cadena[i + 1];
                i += 2;
            } else {
                $h1.textContent += cadena[i];
                i++;
            }

            if (i === cadena.length) {
                clearInterval(efectoMaquina);

            }


        }, 190);

          setTimeout(() => {
            $title1.classList.remove("animate__rotateInDownRight")
          }, 1000);
        

        $h1.textContent = "";
        i = 0;
       
    })















}