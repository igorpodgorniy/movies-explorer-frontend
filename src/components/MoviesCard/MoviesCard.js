import './MoviesCard.css';
import { useHistory } from 'react-router-dom';

function MoviesCard(props) {
  const history = useHistory();
  const {
    movie,
    onMovieLike,
    onMovieDelete,
    isSavedMovie
  } = props;

  const hours = Math.trunc(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours ? hours + 'ч' : ''}${minutes ? minutes + 'м' : ''}`;
  const isSavedMoviePage = history.location.pathname === '/saved-movies';

  let movieFavoriteClassName = `film__favorite ${isSavedMovie ? 'film__favorite_active' : ''}`;
  movieFavoriteClassName = `${movieFavoriteClassName} ${isSavedMoviePage
    ? 'film__favorite_active-save'
    : ''}`;

  const imgUrl = movie.image.url
    ? `https://api.nomoreparties.co/${movie.image.url}`
    : movie.image;

  function handleMovieLike() {
    onMovieLike(movie);
  }

  function handleMovieDelete() {
    onMovieDelete(movie.id || movie._id, isSavedMoviePage)
  }
  return (
    <article className="film">
      <a className="film__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="film__img"
          src={imgUrl}
          alt={`Кадр из фильма '${movie.nameRU}'`}
        />
      </a>
      <div className="film__info">
        <h2 className="film__name" title={movie.nameRU}>{movie.nameRU}</h2>
        <p className="film__duration">{duration}</p>
        <button
          className={movieFavoriteClassName}
          onClick={isSavedMovie ? handleMovieDelete : handleMovieLike}
          type="button"
          aria-label="Сохранить фильм"
        ></button>
      </div>
    </article>
  );
}

export default MoviesCard;