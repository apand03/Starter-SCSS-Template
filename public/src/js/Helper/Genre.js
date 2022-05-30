export function genresName(genres) {
  const list = [];
  let newName = "";
  genres.forEach((genre) => {
    list.push(genre.name);
  });
  for (let name of list) {
    newName += generateName(name);
  }
  return newName;
}

function generateName(genreName) {
  return `<li>${genreName}</li>`;
}
