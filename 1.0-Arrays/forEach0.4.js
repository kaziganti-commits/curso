const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let positivos = 0
let negativos = 0
let cero = 0
let sumaValor = 0
let restaValor = 0

  valores.forEach(valor => {
    if (valor > 0) {
    positivos++;
    sumaValor = sumaValor + valor
  } else if (valor < 0) {
    negativos++;
    restaValor = restaValor + valor
  } else {
    cero++;
  }
});

console.log("Media positivos " + sumaValor/positivos)
console.log("Media negativos " + restaValor/negativos)