// Pom ----------------------------------------
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    console.log();
    elemento.play();
  } else {
    alert("Elemento não econtrado ou seletor invalido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string
  // console.log(idAudio);
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    console.log(event.code === "Space");

    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
