import './MoviesCard.css';
import photo from '../../images/film-frame.png';
import { useHistory } from 'react-router-dom';

function MoviesCard(props) {
  const history = useHistory();
  const { favorite } = props;
  let movieFavoriteClassName = `film__favorite ${favorite ? 'film__favorite_active' : ''}`;
  movieFavoriteClassName = `${movieFavoriteClassName} ${history.location.pathname === '/saved-movies' ? 'film__favorite_active-save' : ''}`
  return (
    <article className="film">
      <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
      <div className="film__info">
        <h2 className="film__name">33 слова о дизайне</h2>
        <p className="film__duration">1ч42м</p>
        <button className={movieFavoriteClassName} type="button" aria-label="Сохранить фильм"></button>
      </div>
    </article>
  );
}

export default MoviesCard;