import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useHistory } from 'react-router-dom';

function MoviesCardList({ moviesList }) {
  const history = useHistory();
  moviesList = moviesList || [];

  return (
    <>
      <ul className="films">
      { moviesList.map((movie) => (
        <li key={movie.id}>
          <MoviesCard movie={movie} />
        </li>
      ))}
      </ul>
      {history.location.pathname !== '/saved-movies' && moviesList.length !== 0 &&
        <section className="more">
          <button className="more__button" type="button" aria-label="Подгрузить ещё фильмы">Ещё</button>
        </section>
      }
    </>
  );
}

export default MoviesCardList;