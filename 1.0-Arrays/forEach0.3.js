// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
//Cantidad de positivos:  6
//Cantidad de negativos:  3
//Cantidad de ceros:  1

const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let positivos = 0
let negativos = 0
let cero = 0

  valores.forEach(valor => {
    if (valor > 0) {
    positivos++;
  } else if (valor < 0) {
    negativos++;
  } else {
    cero++;
  }
});

console.log("Hay " + positivos);
console.log("Hay " + negativos);
console.log("Hay " + cero);