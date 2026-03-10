const quiz = document.getElementById('quiz'); // quiz element
const answerElements = document.querySelectorAll('.answer'); // Todos los elementos con la clase answer (las 4 que dimos)
const questionElement = document.getElementById('question'); // Elemento donde se muestra la pregunta

// Respuestas
const a_text = document.getElementById('a_text'); // Elemento donde se muestra la opción a
const b_text = document.getElementById('b_text'); // Elemento donde se muestra la opción b
const c_text = document.getElementById('c_text'); // Elemento donde se muestra la opción c
const d_text = document.getElementById('d_text'); // Elemento donde se muestra la opción d

// Botón de enviar
const submitButton = document.getElementById('submit'); // Botón para enviar la respuesta

// Inicializamos variables
let currentQuiz = 0; // Índice de la pregunta actual
let score = 0; // Puntuación del usuario

loadQuiz(); // Cargamos la primera pregunta
function loadQuiz(){
    deselectAnswers(); // Deseleccionamos cualquier respuesta seleccionada previamente

    const currentQuizData = quizData[currentQuiz]; // Obtenemos los datos de la pregunta actual

    questionElement.innerText = currentQuizData.question; // Mostramos la pregunta
    a_text.innerText = currentQuizData.a; // Mostramos la opción a
    b_text.innerText = currentQuizData.b; // Mostramos la opción b
    c_text.innerText = currentQuizData.c; // Mostramos la opción c
    d_text.innerText = currentQuizData.d; // Mostramos la opción d
}

function deselectAnswers(){
    answerElements.forEach(answerElement => answerElement.checked = false); // Deseleccionamos todas las respuestas
}

function getSelected(){
    let answer; // Variable para almacenar la respuesta seleccionada

    answerElements.forEach(answerElement => {
        if(answerElement.checked){ // Si el elemento está seleccionado
            answer = answerElement.id; // Guardamos su id (a, b, c o d)
        }
    });

    return answer; // Devolvemos la respuesta seleccionada
}

submitButton.addEventListener('click', () => {
    const answer = getSelected(); // Obtenemos la respuesta seleccionada
    if(answer){ // Si se ha seleccionado una respuesta
        if(answer === quizData[currentQuiz].correct){ // Si la respuesta es correcta
            score++; // Incrementamos la puntuación
        }

        currentQuiz++; // Pasamos a la siguiente pregunta

        if(currentQuiz < quizData.length){ // Si aún hay preguntas disponibles
            loadQuiz(); // Cargamos la siguiente pregunta
        } else { // Si no hay más preguntas
            quiz.innerHTML = `<h2>¡Has respondido correctamente ${score}/${quizData.length} preguntas!</h2>
                               <button onclick="location.reload()">Reiniciar</button>`; // Mostramos el resultado y un botón para reiniciar el quiz
        }
    }
})