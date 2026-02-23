
let message = 'Yo ando afuera de la función';

function say_hi(){
    // Esta variable solo existe en este "universo"
    // Al definirlo con let, se limita su alcance al bloque de código 
    // en el que se encuentra. Así evitas que sea modificado.
    
    let message = 'Yo ando dentro de la función';
    console.log(message);
}

console.log(message); // Mensaje con el valor de la variable global
say_hi();
/* ReferenceError: message is not defined si no definimos let al inicio
 Sin embargo, los "message" que definimos son diferentes. 
    La primera está en ambiente global
    La segunda está en un ambiente local. */
console.log(message); 