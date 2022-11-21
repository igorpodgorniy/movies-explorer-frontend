import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useHistory } from 'react-router-dom';

function MoviesCardList(props) {
  const {
    moviesList,
    searchMovies,
    searchText,
    handleMoreFilms,
  } = props;
  const history = useHistory();
  // moviesList = moviesList || [];

  return (
    <>
      {searchText && <h3 className="films__search-result-text">{searchText}</h3>}
      <ul className="films">
      { moviesList.map((movie) => (
        <li key={movie.id}>
          <MoviesCard movie={movie} />
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