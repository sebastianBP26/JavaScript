const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2');
    const data = await res.json(); 
    const movies = data.results;

    result.innerHTML = '';
    movies.forEach((movie) => {
        const {original_title, poster_path, release_date, overview} = movie;
        const li = document.createElement('li');
        listItems.push(li);

        li.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w1280${poster_path}" alt="${original_title}">
            <div class="movie-info">
                <h4>${original_title}</h4>
                <p>Fecha de lanzamiento: ${release_date}</p>
                <p>${overview}</p>
            </div>
        `
        result.appendChild(li);
    })
}

function filterData(searchTerm){
    listItems.forEach((item) => {
        
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}