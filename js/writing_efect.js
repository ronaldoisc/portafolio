const d = document;
const w = window;

export default function writing(classText, texto) {
    const $h1 = d.getElementById(classText);
    const $sobreMi = d.getElementById("sobre-mi");


    let cadena = texto.split('');
    let i = 0

    $sobreMi.addEventListener("click", e => {


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


        }, 200);


        $h1.textContent = "";
        i = 0;
    })















}