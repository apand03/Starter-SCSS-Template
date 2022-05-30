function details(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}
