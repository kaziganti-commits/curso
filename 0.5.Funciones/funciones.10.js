function test(val) {
	if (val>=10 && val<=20) { 
		return "Inside";
	}else {
		return "Outside";
	}
}

const x = test(11)
console.log(x)
