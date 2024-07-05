let encriptado = document.getElementById("encriptado");
fraseOriginal=prompt("inserte una frase");
for (let i = 0; i < fraseOriginal.length; i++) {
    if (fraseOriginal[i] === "a") {
        fraseOriginal = fraseOriginal.replace("a", "4");
    }
  else if (fraseOriginal[i] === "e") {
      fraseOriginal = fraseOriginal.replace("e", "3");
  }
  
  else if (fraseOriginal[i] === "i") {
    fraseOriginal = fraseOriginal.replace("i", "1");
  }

  else if (fraseOriginal[i] === "o") {
    fraseOriginal = fraseOriginal.replace("o", "0");
  }

  else if (fraseOriginal[i] === "u") {
    fraseOriginal = fraseOriginal.replace("u", "5");
  }
    
  }

encriptado.innerText = fraseOriginal;

console.log(fraseOriginal);
console.log(encriptado);
console.log(typeof(encriptado.innertext));
console.log(encriptado.innerText);