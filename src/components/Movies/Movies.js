import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import { loadMovies } from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';
import {
  convertMovie,
  getSearchMovieList,
  getMovieIdOnSavedMovies,
} from '../../utils/service';
import {
  CARD_QUANTITY_PC,
  CARD_QUANTITY_TABLET,
  CARD_QUANTITY_MOBILE,
  MORE_CARD_QUANTITY_PC,
  MORE_CARD_QUANTITY_TABLET,
  MORE_CARD_QUANTITY_MOBILE,
  WINDOW_WIDTH_PC,
  WINDOW_WIDTH_TABLET,
} from '../../utils/constants';

function Movies(props) {
  /* savedMovies - сохранённые фильмы пользователя, полученные через api */
  const { savedMovies, setSavedMovies, onSignOut } = props;

  const [isLoading, setIsLoading] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]); // все фильмы, загруженные при первом поиске
  const [searchMovies, setSearchMovies] = React.useState([]); // все фильмы, удовлетворяющие поисковым параметрам
  const [moviesList, setMoviesList] = React.useState([]); // фильмы, которые отображаются при рендере
  const [searchText, setSearchText] = React.useState('');
  const [searchErrorText, setSearchErrorText] = React.useState('');
  const [cardQuantity, setCardQuantity] = React.useState(0);
  const [moreCardQuantity, setMoreCardQuantity] = React.useState(0);
  const [searchBarText, setSearchBarText] = React.useState('');
  const [checkboxShortFilms, setCheckboxShortFilms] = React.useState(false);
  const windowWidth = useWindowInnerWidth();
  const localAllMovie = JSON.parse(localStorage.getItem('allMovies'));
  const localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
  const shortFilms = JSON.parse(localStorage.getItem('shortFilms'));

  // досатёт из хранилища фильмы, если они есть
  React.useEffect(() => {
    if (localStorageData) {
      setAllMovies(localAllMovie);
      setSearchBarText(localStorageData.searchText);
      setCheckboxShortFilms(shortFilms);
      searchFilms(localAllMovie, localStorageData.searchText, shortFilms);
      setMoviesList(localStorageData.movies);
      if (localStorageData.movies.length === 0) {
        setSearchText('Ничего не найдено');
      }
    }
  }, []);

  // задаёт количество карточек в зависимовти от разрешения экрана
  React.useEffect(() => {
    if (windowWidth >= WINDOW_WIDTH_PC) {
      setCardQuantity(CARD_QUANTITY_PC);
      setMoreCardQuantity(MORE_CARD_QUANTITY_PC);
      return;
    }
    if (windowWidth > WINDOW_WIDTH_TABLET) {
      setCardQuantity(CARD_QUANTITY_TABLET);
      setMoreCardQuantity(MORE_CARD_QUANTITY_TABLET);
      return;
    }
    setCardQuantity(CARD_QUANTITY_MOBILE);
    setMoreCardQuantity(MORE_CARD_QUANTITY_MOBILE);
  }, [windowWidth]);


  // ищет фильмы, когда переключается чекбокс
  React.useEffect(() => {
    if (allMovies && allMovies.length !== 0) {
      searchFilms(allMovies, searchBarText, checkboxShortFilms);
    }
  }, [checkboxShortFilms]);

  // отображает количество карточек в зависимоти от разрешения экрана
  React.useEffect(() => {
    if (cardQuantity && searchMovies.length !== 0) {
      setMoviesList(searchMovies.slice(0, cardQuantity));
    }
  }, [cardQuantity, searchMovies]);

  function handleSearch(values) {
    setSearchErrorText('');
    setMoviesList([]);
    if (allMovies.length === 0) {
      setIsLoading(true);
      loadMovies()
        .then((movies) => {
          setAllMovies(movies);
          searchFilms(movies, values.search, values.checkbox);
          localStorage.setItem('allMovies', JSON.stringify(movies));
        })
        .catch(err => {
          console.log(err);
          setSearchText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      searchFilms(allMovies, values.search, values.checkbox);
    }
  }

  /**
   * осуществляет поиск фильмов по заданным параметрам
   * @param {*} movies - фильмы, по которым осуществляется поиск
   * @param {*} search - текст из строки поиска
   * @param {*} checkbox - чекбокс короткометражных фильмов
   */
  function searchFilms(movies, search, checkbox) {
    setSearchText('');
    const searchMovies = getSearchMovieList(movies, search, checkbox);
    const viewMovies = searchMovies.slice(0, cardQuantity);
    const localStorageData = {
      searchText: search,
      movies: searchMovies,
    }
    localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
    localStorage.setItem('shortFilms', checkbox);

    // добавляет значение в стейт
    setSearchBarText(search);
    setSearchMovies(searchMovies);
    setMoviesList(viewMovies);
    if (searchMovies.length === 0) {
      setSearchText('Ничего не найдено');
    }
  }

  function handleMoreFilms() {
    setCardQuantity(cardQuantity + moreCardQuantity);
  }

  function handleMovieLike(movie) {
    movie = convertMovie(movie);
    api.likeMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch(err => {
        console.log(err);
        if (err === 'Ошибка: 401') {
          onSignOut();
        }
        console.log(err);
      });
  }

  function handleMovieDelete(movieId) {
    const idFilm = getMovieIdOnSavedMovies(movieId, savedMovies);

    api.deleteMovie(idFilm)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== idFilm));
      })
      .catch(err => {
        if (err === 'Ошибка: 401') {
          onSignOut();
        }
        console.log(err);
      });
  }

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        searchBarText={searchBarText}
        checkboxShortFilms={checkboxShortFilms}
        setCheckboxShortFilms={setCheckboxShortFilms}
        searchErrorText={searchErrorText}
        setSearchErrorText={setSearchErrorText}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        moviesList={moviesList}
        searchText={searchText}
        savedMovies={savedMovies}
        onMovieLike={handleMovieLike}
        onMovieDelete={handleMovieDelete}
      />
      { moviesList.length !== 0
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

export default Movies;