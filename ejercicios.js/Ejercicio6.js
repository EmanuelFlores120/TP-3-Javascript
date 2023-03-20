// Solicitar al usuario los valores de los lados del rectángulo
let ladoA = prompt("Ingrese el valor del lado A del rectángulo:");
let ladoB = prompt("Ingrese el valor del lado B del rectángulo:");

// Convertir los valores ingresados a números
ladoA = Number(ladoA);
ladoB = Number(ladoB);

// Función para calcular el perímetro del rectángulo
function calcularPerimetroRectangulo(a, b) {
  return 2 * (a + b);
}

// Calcular el perímetro del rectángulo
let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);

// Mostrar el resultado por pantalla
document.write(`El perímetro del rectángulo es: ${perimetro}`);
