import {
  moviesCall,
  moviesSearch,
  movieElementCreation,
} from "./Helper/fetch.js";

//* DOM Elements
const main = document.querySelector(".main");
const mainContainer = main.firstElementChild;
const form = document.querySelector("form");
const searchBtn = document.querySelector(".search");
const p = document.createElement("p");
const anotherP = document.createElement("p");
p.className = "results result";
anotherP.className = "count result";

async function resultsCall(func) {
  const results = await func();
  console.log(results.total_results);

  p.textContent = `Total Results : ${results.total_results}`;
  anotherP.textContent = ` Results on this page : ${results.results.length} `;

  main.insertAdjacentElement("afterbegin", p);
  p.insertAdjacentElement("afterend", anotherP);
}

async function searchResults(title) {
  const results = await moviesSearch(title);
  console.log(results.total_results);

  p.textContent = `Total Results : ${results.total_results}`;
  anotherP.textContent = ` Results on this page : ${results.results.length} `;

  main.insertAdjacentElement("afterbegin", p);
  p.insertAdjacentElement("afterend", anotherP);
}

async function displayAllMoviesData() {
  const data = await moviesCall();
  console.log(data);
  data.results.forEach(({ poster_path, title, vote_average, id }) => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = movieElementCreation(title, poster_path, vote_average, id);
    mainContainer.appendChild(div);
    searchBtn.value = "";
  });
  resultsCall(moviesCall);
}

async function displaySearchMoviesData(event) {
  event.preventDefault();
  const searchValue = searchBtn.value;
  if (searchValue === "") {
    emptySearchProp();
  } else {
    const data = await moviesSearch(searchValue);
    console.log(data);
    mainContainer.innerHTML = "";

    data.results.forEach(
      ({ poster_path, title, overview, vote_average, id }) => {
        const div = document.createElement("div");
        div.className = "movie";
        div.innerHTML = movieElementCreation(
          title,
          poster_path,
          vote_average,
          id
        );

        mainContainer.appendChild(div);
        searchBtn.value = "";
      }
    );
  }
  searchResults(searchValue);
}

displayAllMoviesData();

form.addEventListener("submit", displaySearchMoviesData);

function emptySearchProp() {
  alert("Please enter a movie name");
}
// function details(id) {
//   sessionStorage.setItem("movieId", id);
//   window.location = "movie.html";
//   return false;
// }
