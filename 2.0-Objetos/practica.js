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
console.log(i%2===0 ? "Es par" : "Es impar");

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

function calculaPerimetro(radio) {
 const p = 2 * 3.1416 * radio
 console.log(p)
}
calculaPerimetro(8)
function calculaArea(radio) {
  const r = 2 * radio * radio
  console.log(r)
}
calculaArea(8)

function bradio(xradio){ 
  aradio(8)
function aradio(xradio){
  const p1 = 2 * 3.1416 * xradio
  const p2 = 2 * xradio**2
  console.log(p1)
  console.log(p2)
}
}
bradio(8)

function test(val) {
	if (val >= 10 && val <=20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}
const w = test(9)
console.log(w)

function testEqual(val) {
	if (val === 12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}

function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	} else {
		result = "Menor o igual a 5";
	}
	return result;
}

function testElse(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else if (val < 5) {
	result = "Smaller than 5";
	} else {
		result = "Equal to 5";
	}
	return result;
}

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num <15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

function nand(a, b) {
  if (a && b === true ? false : true);
}

function hoyQuieroComer(comida){
console.log("hoy quiero comer " + comida)
}
hoyQuieroComer("garbanzos")


