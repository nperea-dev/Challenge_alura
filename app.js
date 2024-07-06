
    window.addEventListener("load", function() {

  let textoCapturado = prompt("escriba la frase a encriptar");
  let capturado = document.getElementById("capturado");
  let textoEncriptado = document.getElementById("encriptar");
  let desencripatado = document.getElementById("desencriptar");
  let textoParaDesencriptar ="";
  

  capturado.innerText = textoCapturado;

//seccion de encriptado
  const transcript = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  for (let clave in transcript) {
    textoCapturado = textoCapturado.replaceAll(clave, transcript[clave]);
  }

  textoEncriptado.innerText = textoCapturado;
  textoParaDesencriptar = textoCapturado;
  
  

 //seccion de desencriptado
  const untranscript = {
    enter:"e",
    imes:"i",
    ai:"a",
    ober:"o",
    ufat:"u",
  };

  for (let clave in untranscript) {
    textoParaDesencriptar = textoParaDesencriptar.replaceAll(clave, untranscript[clave]);
  }

  desencripatado.innerText = textoParaDesencriptar;


});

