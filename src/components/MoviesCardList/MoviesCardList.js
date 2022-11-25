import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const {
    moviesList,
    searchText,
    onMovieLike,
    savedMovies,
    onMovieDelete,
  } = props;

  function isSavedMovie(savedMovies, movie) {
    return savedMovies.find((item) => item.movieId === (movie.id || movie.movieId));
  };

  return (
    <>
      {searchText && <h3 className="films__search-result-text">{searchText}</h3>}
      <ul className="films">
      { moviesList.map((movie) => (
        <li key={movie.id || movie.movieId}>
          <MoviesCard
            movie={movie}
            onMovieLike={onMovieLike}
            onMovieDelete={onMovieDelete}
            isSavedMovie={isSavedMovie(savedMovies, movie)}
          />
        </li>
      ))}
      </ul>
    </>
  );
}

export default MoviesCardList;