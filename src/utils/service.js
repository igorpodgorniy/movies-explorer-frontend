import {
  DURATION_SHORT_FILM,
  BASE_MOVI_URL,
} from './constants';

export const convertMovie = (movie) => {
  const data = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    trailerLink: movie.trailerLink,
    thumbnail: `${BASE_MOVI_URL}${movie.image.formats.thumbnail.url}`,
    image: `${BASE_MOVI_URL}${movie.image.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }

  return data;
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