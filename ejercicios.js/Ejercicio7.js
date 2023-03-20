// Solicitar al usuario el número para el que se desea la tabla de multiplicar
let numero = prompt("Ingrese el número para la tabla de multiplicar:");

// Convertir el número ingresado a un valor numérico
numero = Number(numero);

// Función para crear la tabla de multiplicar
function tablaMultiplicar(numero) {
  // Recorrer los números del 1 al 10
  for (let i = 1; i <= 10; i++) {
    // Calcular el resultado de la multiplicación
    let resultado = numero * i;
    // Mostrar el resultado por pantalla
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Llamar a la función para crear la tabla de multiplicar
tablaMultiplicar(numero);
