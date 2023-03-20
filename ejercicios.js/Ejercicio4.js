function parOImpar(numero) {
    if(numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
  // Ejemplo de uso
  console.log(parOImpar(4)); // "El número es par."
  console.log(parOImpar(7)); // "El número es impar."
  