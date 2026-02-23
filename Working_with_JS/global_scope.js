// Ambiente global
// Var define globalmente
// La única razón de usar var es que es un código muy viejo, pero no es recomendable usarlo en código moderno.

var message = 'Soy una variable asignada en el ámbito global';
function say_hi() {
    
    // Ambiente local
    message = 'Yo estoy dentro de la función'; 
    console.log(message);
}

console.log(message); // Mensaje con el valor de la variable global
say_hi(); // Mensaje con el valor de la variable local.
console.log(message); // Mensaje con el valor de la variable local, porque modifica la variable global, lo que puede causar confusión y errores en el código. 