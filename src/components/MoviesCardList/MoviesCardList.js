import './MoviesCardList.css';
import photo from '../../images/film-frame.png';

function MoviesCardList() {
  return (
    <ul className="films">
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
      <li>
        <article className="film">
          <img className="film__img" src={photo} alt="Кадр из фильма '33 слова о дизайне'" />
          <div className="film__info">
            <h2 className="film__name">33 слова о дизайне</h2>
            <p className="film__duration">1ч42м</p>
            <button className="film__favorite film__favorite_active" type="button" aria-label="Сохранить фильм"></button>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default MoviesCardList;