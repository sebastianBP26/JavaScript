// Declaración de variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toolbox = document.querySelector('.toolbox');
const title = document.querySelector('h1');

// Ajustar el tamaño del canvas dinámicamente
function resizeCanvas() {
    const titleHeight = title.offsetHeight; // Altura del título
    const toolboxHeight = toolbox.offsetHeight; // Altura de la barra de herramientas

    // Usar visualViewport.height si está disponible (mejor para móviles)
    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

    // Ajustar el tamaño del canvas dejando espacio para el título y la barra de herramientas
    canvas.width = window.innerWidth; // Ancho de la ventana
    canvas.height = viewportHeight - titleHeight - toolboxHeight - 100; // Alto disponible
    cleanScreen(); // Limpiar el canvas después de redimensionar
}

// Llama a la función al cargar la página
resizeCanvas();

// Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', resizeCanvas);


// Botones
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const downloadEl = document.getElementById('download-btn');

// Activación de canvas
cleanScreen(); // Limpiar el canvas al iniciar

// Variables para el canvas
let size = 10;
let isPressed = false;
let isEraserActive = false;
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

// Eventos del mouse

// Identificamos las coordenadas de x y y de donde esta pintando
// Solo nos interesa cuando presiona dentro del canvas
// Eventos del mouse y táctiles

// Evento para comenzar a dibujar
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX; 
    y = e.offsetY;
});

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevenir el desplazamiento
    isPressed = true;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
});

// Evento para detener el dibujo
document.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

document.addEventListener('touchend', () => {
    e.preventDefault(); // Prevenir el desplazamiento
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Evento para dibujar mientras se mueve
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (isPressed) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x2 = touch.clientX - rect.left;
        const y2 = touch.clientY - rect.top;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

// Update Botones
function updateSizeOnScreen(){
    sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 2;
    if(size > 50){
        size = 50; // Valor máximo
    }

    updateSizeOnScreen();
})

// Decrease
function decreaseSizeOnScreen(){
    sizeEl.innerText = size;
}

decreaseBtn.addEventListener('click', () => {
    size -= 2;
    if(size < 5){
        size = 2; // Valor máximo
    }

    decreaseSizeOnScreen();
})

// Color
colorEl.addEventListener('change', (e) => color = e.target.value);  

// Clear
clearEl.addEventListener('click', () => cleanScreen()); // Limpiar el canvas
function cleanScreen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

// Descargar imagen
downloadEl.addEventListener('click', () => {
    const canvasUrl = canvas.toDataURL('image/png');
    const createEl = document.createElement('a');
    createEl.href = canvasUrl; // Dirección de la imagen creada
    createEl.download = 'my_canvas_draw.png'
    createEl.click(); // Simular el click para descargar la imagen
    createEl.remove(); // Eliminar el elemento creado
})

// Evento para activar/desactivar la goma
eraserBtn.addEventListener('click', () => {
    if (!isEraserActive) {
        isEraserActive = true;
        color = '#FFFFFF'; // Cambiar el color del trazo a blanco (color del fondo)
        eraserBtn.style.backgroundColor = '#333'; // Indicar que la goma está activa
        eraserBtn.style.color = '#fff';
    } else {
        isEraserActive = false;
        color = colorEl.value; // Restaurar el color seleccionado
        eraserBtn.style.backgroundColor = '#ff6666'; // Restaurar el estilo del botón
        eraserBtn.style.color = 'white';
    }
});