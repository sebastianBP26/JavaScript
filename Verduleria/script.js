const main = document.getElementById("main"); // Elemento main
const closeBtn = document.getElementById("close"); // Botón de cerrar

data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');
    const {img, text} = item;
    box.classList.add('my_box');
    box.classList.add('column');
    box.classList.add('is-one-quarter');
    box.innerHTML = `
        <img src="${img}" alt="${text}">
        <div class="info">${text}</div>
    `;

    main.appendChild(box);
}