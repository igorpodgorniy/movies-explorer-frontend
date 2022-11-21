import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import { loadMovies } from '../../utils/MoviesApi';

function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [moviesList, setMoviesList] = React.useState([]);
  const [searchErrorText, setSearchErrorText] = React.useState('');
  const [cardQuantity, setCardQuantity] = React.useState(0);
  const [moreCardQuantity, setMoreCardQuantity] = React.useState(0);
  const [searchBarText, setSearchBarText] = React.useState('');
  const [checkboxShortFilms, setCheckboxShortFilms] = React.useState(false);
  const windowWidth = useWindowInnerWidth();
  const localStorageData = JSON.parse(localStorage.getItem('localStorageData'));

  React.useEffect(() => {
    if (localStorageData) {
      setSearchBarText(localStorageData.searchText);
      setCheckboxShortFilms(localStorageData.shortFilms);
      setMoviesList(localStorageData.movies);
      if (localStorageData.movies.length === 0) {
        setSearchText('Ничего не найдено');
      }
    }
  }, []);

  React.useEffect(() => {
    if (windowWidth >= 876) {
      setCardQuantity(12);
      setMoreCardQuantity(4);
      return;
    }
    if (windowWidth > 600) {
      setCardQuantity(8);
      setMoreCardQuantity(2);
      return;
    }
    setCardQuantity(5);
    setMoreCardQuantity(5);
  }, [windowWidth]);

  React.useEffect(() => {
    if (cardQuantity) {
      setSearchMovies(localStorageData.movies);
      setMoviesList(localStorageData.movies.slice(0, cardQuantity));
    }
  }, [cardQuantity])

  function handleSearch(values) {
    setIsLoading(true);
    setSearchErrorText('');
    setSearchText('');
    setMoviesList([]);
    loadMovies()
      .then((movies) => {
        const searchMovies = movies.filter((movie) => {
          return movie.nameRU
            .toLowerCase()
            .indexOf(values.search.toLowerCase()) > -1
            && (values.checkbox ? movie.duration <= 40 : movie.duration);
        });
        const viewMovies = searchMovies.slice(0, cardQuantity);
        const localStorageData = {
          searchText: values.search,
          shortFilms: values.checkbox,
          movies: searchMovies,
        }
        localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
        setSearchMovies(searchMovies);
        setMoviesList(viewMovies);
        if (searchMovies.length === 0) {
          setSearchText('Ничего не найдено');
        }
      })
      .catch(err => {
        console.log(err);
        setSearchText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleMoreFilms() {
    setCardQuantity(cardQuantity + moreCardQuantity);
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
        searchMovies={searchMovies}
        searchText={searchText}
        handleMoreFilms={handleMoreFilms}
      />
    </>
  );
}

export default Movies;