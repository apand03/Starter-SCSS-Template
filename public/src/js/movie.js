import { detailMovie } from "./Helper/Details.js";

const API_KEY2 = "b9d283ff6edd5af21b4f606d050e01c3";
const BASE_URL2 = "https://api.themoviedb.org/3";
const imgPath2 = "https://image.tmdb.org/t/p/w1280/";
const imdbPath = "https://www.imdb.com/title/";

const movieDetails = document.querySelector(".movie-details");

async function SearchIdCall() {
  const movieId = sessionStorage.getItem("movieId");
  const response = await fetch(
    BASE_URL2 + `/movie/${movieId}?api_key=${API_KEY2}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}

async function displayMovieDetails() {
  const data = await SearchIdCall();
  const { title, poster_path, genres, overview, vote_average, imdb_id } = data;
  console.log(data);
  const div = document.createElement("div");
  div.className = "movieDetail";
  div.innerHTML = detailMovie(
    imgPath2,
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    imdbPath,
    imdb_id
  );
  movieDetails.appendChild(div);
}

displayMovieDetails();
