// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
// Cantidad de positivos:  6
// Cantidad de negativos:  3
// Cantidad de ceros:  1

const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
for (let i = 0; i = valores.length; i++) {
  const val = valores[i] 
if (val i<0) {
		result = "Positivo";
	} else if (val i>0)  {
	  result = "Negativo";
  } else if (val i===0) {
		result = "Cero";
	}
}
	return result;

