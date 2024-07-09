
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
 
 
  
  const botonCopiar = document.getElementById("copiar")
  botonCopiar.addEventListener("click", copiar)



//funciones de los eventos
  

  function desencriptar(){
    alert("presionaste el boton desencriptar")
  }

  function copiar(){
    alert("presionaste el boton copiar")
  }

//seccion de encriptado
const botonEncriptar = document.getElementById("encriptar")
botonEncriptar.addEventListener("click", encriptar);

  function encriptar(){
    if (capturado.value === "") {
       textoSalida.innerText =""
      alert("no has ingresado texto");
      return;
    }
    else{
      
      textoEncriptado = capturado.value;
         
      for (let clave in transcript) {
      textoEncriptado = textoEncriptado.replaceAll(clave, transcript[clave]);    
      }
    }
textoSalida.innerText = textoEncriptado;
}
    

   
 //seccion de desencriptado
 const botonDesencriptar = document.getElementById("desencriptar")
 botonDesencriptar.addEventListener("click", desencriptar);
  
 function desencriptar(){
  if (capturado.value === "") {
     textoSalida.innerText =""
    alert("no has ingresado texto");
    return;
  }
  else{
    
    textoEncriptado = capturado.value;
       
    for (let clave in untranscript) {
    textoEncriptado = textoEncriptado.replaceAll(clave, untranscript[clave]);    
    }
  }
textoSalida.innerText = textoEncriptado;
}



 

  for (let clave in untranscript) {
    textoParaDesencriptar = textoParaDesencriptar.replaceAll(clave, untranscript[clave]);
  }

  desencripatado.innerText = textoParaDesencriptar;


});

