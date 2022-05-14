// import { call } from "call";
const API_KEY = "b9d283ff6edd5af21b4f606d050e01c3";
const moviesCall = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=2`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
const moviesSearch = async (title) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&language=en-US&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

async function displayAllMoviesData() {
  const data = await moviesCall();
  console.log(data);
}

async function displaySearchMoviesData() {
  const data = await moviesSearch("taxi");
  console.log(data);
}

displayAllMoviesData();
displaySearchMoviesData();
