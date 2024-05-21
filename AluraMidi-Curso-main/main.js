function playSonido (idElementoSonido) {
    document.querySelector(idElementoSonido).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

for (let = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);    

    tecla.onclick = function() {
        playSonido(idAudio);
    }
    tecla.onkeydown = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
        tecla.classList.add("activa");
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove("activa");
    }
    
}
