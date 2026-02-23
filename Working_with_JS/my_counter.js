/*
¿Qué es una variable en JS?

* En otros lenguajes de programación "Todo es un objeto"
* En JS "Casi todo es un objeto"
    * Tipos de datos: Primitivos(Undefined, null, Boolean, Number, String, Bigint y Symbol) que son inmutables y NO son objetos pero...
    * JS los envuelve temporalmente en objetos (autoboxing) para poder usar propiedades y métodos

Entonces ¿Qué almacenamos en las variables?
    - Valores: De tipos de datos primitivos
    - Referencias: En el caso de objetos, las variables almacenan una referencia a la ubicación en memoria donde se gaurda el objeto.

Los objetos se asignan y copian por referencia, mientras que los valores primitivos se asignan por valor. 

¿Cómo declaramos variables en JS?

    - variable: defining keyword | name | value

* var: Utilizado en variablesen las que se les asignará un valor MAS DE UNA VEZ (Global scope o función scope).
* const: Utilizado en variables en las que se les asignará un valor UNA SOLA VEZ (Global scope o función scope).
* let: Utilizado en variables en las que se les asignará un valor MAS DE UNA VEZ (Local Scope).

** Global Scope: Significa que puedes utilizar la variables en todo el script
** Local Scope: Significa que puedes utilizar la variable solamente en el bloque en el que la variable fue definida
¡En Javascript moderno NO se recomienda el uso de var, se prefiere el uso de const y let porque ofrecen un control de alcance más preciso evitando así errores de 
   redeclaración y comportamientos inesperados (hosting) !

¿Qué es el hosting?
    Con las declaraciones var o funciones, se elevan al principio de su ámbito.

En JS moderno, no uses Var para evitar hosting y variables globales.

Ejemplo de declaración de variables:

* let human = 'Aragon';
* Varias variables en una sola línea:
    let hobbit_1 = 'Frodo', hobbit_2 = 'Sam', hobbit_3 = 'Merry', hobbit_4 = 'Pippin'; 
* No definido
    let human;
    human = 'Aragon';

¿Cómo nombrar variables?
* Existen palabras reservadas como async, await, break, case, etc
* Puedes pero no debes: alert, blur, closed, document, focus, frames, location, navigator, open, screen, window.
* Las variables deben ser escritas con letras, números y algunos caracteres especiales y no pueden contener espacios o iniciar con números.
* Las variables son Case Sensitive, es decir, "human" y "Human" son variables diferentes.
* Se acostumbra el formato lowerCamelCase para nombrar variables, es decir, la primera letra de la variable es
  minúscula y cada palabra subsiguiente comienza con mayúscula (ejemplo: myVariableName).
* Se utiliza UpperCamelCase para todas las constantes.
* Meaningful Names: clientAccountNumber | clacnum ---> clientAccountNumber es un nombre de variable más significativo que clacnum, ya que describe claramente su propósito y contenido.

-----------------------------------------------------------------------------------------------------------------------------------------
Comentarios generales

- Python es de lenguaje de tipado dinámico, no es necesario declarar el tipo de variable. 
  JavaScript es de tipado dinámico, pero es necesario declarar la variable con var, let o const.
- #:Sinifica ID, .:Significa clase
- No olvidar el ";"
-----------------------------------------------------------------------------------------------------------------------------------------
    Inicio del código:
*/

// Cons es para variables constantes.
// Elementos del DOM: Document Object Model, es la representación de la página web en el navegador.
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

// Construimos variable para almacenar con const, ya que es una variable que no va a cambiar.
let count = 1;

// Si alguien le da click a nuestra variable buttonA, se ejecutará la función que le asignamos a continuación.
// Un reload al sitio "borra" lo que ha sucedido, por lo que el contador se reinicia a 1 cada vez que se recarga la página.
buttonA.onclick = () => {
    buttonA.textContent = "Intenta otra vez";
    headingA.textContent = `Has dado: ${count} clicks`;
    count += 1;
};