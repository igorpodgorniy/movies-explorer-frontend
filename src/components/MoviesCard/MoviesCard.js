import './MoviesCard.css';
import { useHistory } from 'react-router-dom';

function MoviesCard(props) {
  const history = useHistory();
  const { favorite, movie } = props;
  const hours = Math.trunc(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours ? hours + 'ч' : ''}${minutes ? minutes + 'м' : ''}`
  let movieFavoriteClassName = `film__favorite ${favorite ? 'film__favorite_active' : ''}`;
  movieFavoriteClassName = `${movieFavoriteClassName} ${history.location.pathname === '/saved-movies' ? 'film__favorite_active-save' : ''}`
  return (
    <article className="film">
      <a className="film__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="film__img" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={`Кадр из фильма '${movie.nameRU}'`} />
      </a>
      <div className="film__info">
        <h2 className="film__name" title={movie.nameRU}>{movie.nameRU}</h2>
        <p className="film__duration">{duration}</p>
        <button className={movieFavoriteClassName} type="button" aria-label="Сохранить фильм"></button>
      </div>
    </article>
  );
}

export default MoviesCard;