let a = 5;
let b = 7;
// ... aquí y sólo aquí añadiremos las líneas de codigo
 c = a;
//c ahora vale 5
 a = b;
//a ahora vale 7
b = c;
/*b ahora vale 5
con esto, deberiamos haber realizado los cambios necesarios*/
console.log('a: ', a); //Debería mostrar 7
console.log('b: ', b); //Debería mostrar 5
//porque la comilla simple y los : en la instrucción console.log? y la ,?