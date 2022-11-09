import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <>
      <ul className="films">
        <li>
          <MoviesCard favorite={true}/>
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard favorite={true}/>
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard favorite={true}/>
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard favorite={true}/>
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard favorite={true}/>
        </li>
      </ul>
      <section className="more">
        <button className="more__button" type="button" aria-label="Подгрузить ещё фильмы">Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;