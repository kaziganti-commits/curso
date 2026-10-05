const a = 4
const b = 4

if (a>b) {
  console.log("a es mayor que b")
} 
else if (a<b){  
  console.log("b es mayor que a")
} 
else console.log("son iguales")

if (a>b) {
  function producto(d, e) {
    const f = (a*b)
    console.log(f)
  } 
  producto(a, b)
} else if (a<b) {
  function div(g, h) {
  console.log(h%g===0 ? "Es divisible" : "No es divisible")
  }
div(a, b) // Corregir de aquí hacia abajo.
  } else {
    function exponente(x, y) {
      let z = 0
      for (let i=0; i=a**b; i=a*b)
      z = z * i
    console.log(z)
    }
  }




