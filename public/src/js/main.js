const API_KEY = "b9d283ff6edd5af21b4f606d050e01c3";
const BASE_URL = "https://api.themoviedb.org/3";
const popularMovies = `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const searchMovies = `/search/movie?api_key=${API_KEY}&query=`;
const imgPath = "https://image.tmdb.org/t/p/w1280/";

const moviesCall = async () => {
  const response = await fetch(BASE_URL + popularMovies, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const moviesSearch = async (title) => {
  const response = await fetch(BASE_URL + searchMovies + title, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

async function displayAllMoviesData() {
  const data = await moviesCall();
  console.log(data.results);
  data.results.forEach(({ poster_path, title, overview, vote_average }) => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
     <img src=${imgPath + poster_path} alt="${title}" class="movie__img"/>
     <div class="movie__info">
       <h1>${title}</h1>
       <p>${overview}</p>
     </div>
    `;

    document.body.appendChild(div);
  });
}

async function displaySearchMoviesData() {
  const data = await moviesSearch("taxi");
  console.log(data);
}

displayAllMoviesData();
displaySearchMoviesData();
