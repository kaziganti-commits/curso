function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	}else {
	result = "Menor o igual a 5";
}
return result;}

const x = testElse(3);
console.log(x)
