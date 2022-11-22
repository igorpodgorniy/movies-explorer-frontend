import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import { getMovieIdOnSavedMovies } from '../../utils/service';

function MoviesCardList(props) {
  const {
    moviesList,
    searchMovies,
    searchText,
    handleMoreFilms,
    onMovieLike,
    savedMovies,
    setSavedMovies,
    setMoviesList,
  } = props;
  const history = useHistory();

  function isSavedMovie(savedMovies, movie) {
    return savedMovies.find((item) => item.movieId === (movie.id || movie.movieId));
  };

  function handleMovieDelete(movieId, isSavedMoviePage) {
    const idFilm = isSavedMoviePage
      ? movieId
      : getMovieIdOnSavedMovies(movieId, savedMovies);

    api.deleteMovie(idFilm)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== idFilm));
        setMoviesList((movies) => movies.filter((movie) => movie._id !== idFilm));
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      {searchText && <h3 className="films__search-result-text">{searchText}</h3>}
      <ul className="films">
      { moviesList.map((movie) => (
        <li key={movie.id || movie.movieId}>
          <MoviesCard
            movie={movie}
            onMovieLike={onMovieLike}
            onMovieDelete={handleMovieDelete}
            isSavedMovie={isSavedMovie(savedMovies, movie)}
          />
        </li>
      ))}
      </ul>
      {history.location.pathname !== '/saved-movies'
        && moviesList.length !== 0
        && moviesList.length !== searchMovies.length &&
        <section className="more">
          <button
            className="more__button"
            type="button"
            onClick={handleMoreFilms}
            aria-label="Подгрузить ещё фильмы">
              Ещё
            </button>
        </section>
      }
    </>
  );
}

export default MoviesCardList;