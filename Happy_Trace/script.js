
// Declaración de variables
const canvas = document.getElementById('canvas');
canvas.width = 1196;
canvas.height = 600;

// Botones
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const downloadEl = document.getElementById('download-btn');

// Activación de canvas
const ctx = canvas.getContext('2d');
cleanScreen(); // Limpiar el canvas al iniciar

// Variables para el canvas
let size = 10;
let isPressed = false;
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
    e.preventDefault(); // Prevenir el desplazamiento
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