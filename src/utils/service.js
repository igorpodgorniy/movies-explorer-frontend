import {
  DURATION_SHORT_FILM,
  BASE_MOVI_URL,
} from './constants';

export const convertMovie = (movie) => {
  movie.thumbnail = `${BASE_MOVI_URL}${movie.image.formats.thumbnail.url}`;
  movie.image = `${BASE_MOVI_URL}${movie.image.url}`;
  movie.movieId = movie.id;
  delete movie.id;
  delete movie.created_at;
  delete movie.updated_at;

  return movie;
}

export const getMovieIdOnSavedMovies = (id, arr) => {
  return arr.find((item) => item.movieId === id)._id;
}

export const getSearchMovieList = (movieList, search, checkbox) => {
  return movieList.filter((movie) => {
    return movie.nameRU
      .toLowerCase()
      .indexOf(search.toLowerCase()) > -1
      && (checkbox ? movie.duration <= DURATION_SHORT_FILM : movie.duration);
  });
}