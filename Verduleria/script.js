const main = document.getElementById("main"); // Elemento main
const closeBtn = document.getElementById("close"); // Botón de cerrar

data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');
    const {image, text} = item;
    box.classList.add('my_box');
    box.classList.add('column');
    box.classList.add('is-one-quarter');
    box.innerHTML = `
        <img src="${image}" alt="${text}">
        <div class="info">${text}</div>
    `;

    box.addEventListener('click', () => {
        window.scrollTo(0,0);
        document.getElementById('text-box').classList.toggle('show');
        document.getElementById('product_name').innerText = item.text;
        document.getElementById('product_description').innerText = item.description;
        document.getElementById('product_price').innerText = item.price;
        document.getElementById('product_image').src = item.image;

    })
    main.appendChild(box);
}

closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show');
})

