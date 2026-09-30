let n = 5;
let suma = 0;
while(n >= 0) {
  suma = suma + 1;
  n--;
}
console.log(suma);

function hoyQuieroComer(comida){
console.log("Hoy quiero comer " + comida)
}
hoyQuieroComer("garbanzos");

function sirveParaLuchar(esFuerte){
console.log(esFuerte=true ? "Es válido" : "No es válido");
}
sirveParaLuchar("true")

const i = 7
console.log(i%2==0 ? "Es par" : "Es impar");

function calcularCubo(num){
  console.log(num**3);
}
calcularCubo(3);

function calcularVelocidad(Kmhora){
  console.log(Kmhora*1000 + " metros hora")
}
calcularVelocidad(120);

function calcularArea(alto, ancho){
  console.log("El área es " + alto * ancho)
}
calcularArea(5, 3);

function areaTriangulo(base, altura){
  area = base * altura / 2
  console.log("El área del triangulo es " + area)
}
areaTriangulo(6, 3);

function hello() {
	return "Hi!";
}
const x = hello();
console.log(x); // ¿Qué valor de x se mostrará en la consola?

function whereIs(name) {
	return "Dónde esta " + name + "?";
}

const y = whereIs("Jacky");
console.log(y);       