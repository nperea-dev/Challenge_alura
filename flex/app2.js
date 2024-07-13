
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
        console.log(capturado.value) 
        console.log(">>>>>>>>>>>>>>>>>>>>>") 
        console.log(textoEncriptado) 
      for (let clave in transcript) {
      textoEncriptado = textoEncriptado.replaceAll(clave, transcript[clave]);  
      
      }
    }
document.getElementById("no-mensaje-imagen").style.display = "none";
//botonCopiar.style.display = "default";
textoSalida.innerText = textoEncriptado;
botonCopiar.style.display = "initial";

}
    
/*
   
 //seccion de desencriptado
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
document.querySelector("img").style.display = "none";
botonCopiar.style.display = "initial";
textoSalida.innerText = textoEncriptado;
}

*/
const botonCopiar = document.getElementById("copiar")
botonCopiar.addEventListener("click", copiar)
function copiar(){
  alert("presionaste el boton copiar")
}







});

