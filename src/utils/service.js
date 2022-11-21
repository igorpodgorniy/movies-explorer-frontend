export const convertMovie = (movie) => {
  movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
  movie.image = `https://api.nomoreparties.co${movie.image.url}`;
  movie.movieId = movie.id;
  delete movie.id;
  delete movie.created_at;
  delete movie.updated_at;

  return movie;
}

export const getMovieIdOnSavedMovies = (id, arr) => {
  return arr.find((item) => item.movieId === id)._id;
}