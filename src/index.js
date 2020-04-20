const colors = require('colors');

let a = 10;
a += 10;
console.log("mi suma es: ".green + a);

var mi_variable; // scope global

const constante = "miriam"; // es inmutable
console.log(constante);

//constante = "grizel" // esto no es posible
//console.log(constante);

let age = 23;
console.log(age);

if (age == 23) {
    let color = "red".red;
    console.log(color);    
}

//console.log(color);

function Saludar(msg) {
    let mi_saludo = msg; 
    // ""+varieble+"".yellow
    console.log(`${mi_saludo}`.yellow);
}

Saludar("Hola shuda");



