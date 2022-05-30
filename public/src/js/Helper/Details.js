import { getRatingColor } from "./Rating.js";
import { genresName } from "./Genre.js";

export function detailMovie(
  img,
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  imdbPath,
  imdb_id
) {
  return `
   <img src=${img + poster_path} alt="${title}" class="movie__img"/>
   <div class="info">
    <h2 class="title">${title}
    <span class="movie__rating rating ${getRatingColor(
      vote_average
    )}">${vote_average}</span>
    </h2>
    <p class="genres__title">Genres :</p>
    <ul class="genres">
      ${genresName(genres)}
    </ul>
    <p class="overview__title"> Overview: <span class="overview">${overview}</span></p>
    <div class="btn__container">
      <a href="index.html" class="btn btn__details">Go back</a>
      <a href=${
        imdbPath + imdb_id
      } target="_blank" class="btn btn__details btn__imdb">View on IMDB</a>
    </div>
   </div>
  `;
}
