import { getRatingColor } from "./Rating.js";

const API_KEY = "b9d283ff6edd5af21b4f606d050e01c3";
const BASE_URL = "https://api.themoviedb.org/3";
const popularMovies = `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const searchMovies = `/search/movie?api_key=${API_KEY}&page=1&query=`;
const imgPath = "https://image.tmdb.org/t/p/w1280/";

export async function moviesCall() {
  const response = await fetch(BASE_URL + popularMovies, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function moviesSearch(title) {
  const response = await fetch(BASE_URL + searchMovies + title);
  const data = await response.json();
  return data;
}

export function movieElementCreation(title, poster, rating, id) {
  return `
  <img src=${imgPath + poster} alt="${title}" class="movie__img"/>
  <div class="movie__details">
    <div class="movie__info">
     <h1 class="movie__title">${title}</h1>
     <span class="movie__rating ${getRatingColor(rating)}">${rating}</span>
    </div>
    <a href="#" class="btn" onClick="details(${id})">Details</a>
  </div>
  `;
}

export { API_KEY, BASE_URL, popularMovies, searchMovies, imgPath };
