let variable1 = 5;
let variable2 = 7; 

console.log(variable1); // 5
console.log(variable2); // Esta línea dará error
// ahora deberia ser correcto al quitar las llaves y ambas en global


{
    let variable1 = 5;
    let variable2 = 7;
    console.log(variable1); // 5
    console.log(variable2); // 7
}
//Ahora tenemos variable1 y variable2 fuera de global y sin shadowing, y solo estaria en local  