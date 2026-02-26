// Variables 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get Movies
getMovies(API_URL);
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json(); // Parse

    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    movies.forEach((movie) =>{
        const {title, poster_path, vote_average, overview} = movie
        
        const movieElement = document.createElement('div');
        movieElement.classList.add('column');
        movieElement.classList.add('is-one-quarter');

        movieElement.innerHTML = `
            <div class ="has-text-centered">
            <img src = "${IMG_PATH + poster_path}" alt = "${title}">
            <span class = "movie_title">${title}</span><br>
            <span class = "${getClassByRate(vote_average)}">(${vote_average.toFixed(2)})</span>
            <span class = "overview"> ${overview}</span>
        `;

        main.appendChild(movieElement);
    });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    } else if (vote >= 5){
        return 'orange';
    } else {
        return 'red';
    }
}   

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
    
})