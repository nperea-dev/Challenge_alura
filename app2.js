
    window.addEventListener("load", function() { 

 // declaracion de variables y eventos
 let capturado = document.getElementById("textoAencriptar");
 let textoEncriptado = " ";
 let textoSalida = document.getElementById("texto-salida");

 
 //definicion de los objetos transcript y untranscript 
 const transcript = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const untranscript = {
  enter:"e",
  imes:"i",
  ai:"a",
  ober:"o",
  ufat:"u",
};
 
 //funciones de los eventos
 const botonCopiar = document.getElementById("copiar")

  
//seccion de encriptado
const botonEncriptar = document.getElementById("encriptar")
botonEncriptar.addEventListener("click", encriptar);

  function encriptar(){
    
    if (capturado.value === "") {
       textoSalida.innerText ="no has ingresado texto alguno"
      document.getElementById("no-mensaje-imagen").style.display = "initial";
      return;
    }
    else{
      
      textoEncriptado = capturado.value;
      for (let clave in transcript) {
      textoEncriptado = textoEncriptado.replaceAll(clave, transcript[clave]);  
      
      }
    }
document.getElementById("no-mensaje-imagen").style.display = "none";
textoSalida.innerText = textoEncriptado;
capturado.value=""
botonCopiar.style.display = "initial";
botonCopiar.addEventListener("click", copiar)

}

// seccion de copiado

function copiar(){
botonCopiar.style.display = "none";
navigator.clipboard.writeText(textoSalida.innerText)
textoSalida.innerText= " 📥	 Tu mensaje ha sido copiado al portapapeles! 📥	"
capturado.value=""

}

// seccion de desencriptado.

const botonDesencriptar = document.getElementById("desencriptar")
botonDesencriptar.addEventListener("click", desencriptar);

function desencriptar(){
    
  if (capturado.value === "") {
     textoSalida.innerText ="no has ingresado texto alguno"
    document.getElementById("no-mensaje-imagen").style.display = "initial";
    return;
  }
  else{
    
    textoEncriptado = capturado.value;
    for (let clave in untranscript) {
    textoEncriptado = textoEncriptado.replaceAll(clave, untranscript[clave]);      
    
    }
  }
document.getElementById("no-mensaje-imagen").style.display = "none";
textoSalida.innerText = textoEncriptado;
botonCopiar.style.display = "initial";
botonCopiar.addEventListener("click", copiar)
capturado.value=""

}


});

