import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import { loadMovies } from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';
import { convertMovie, getSearchMovieList } from '../../utils/service';

function Movies(props) {
  const { savedMovies, setSavedMovies } = props;

  const [isLoading, setIsLoading] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
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
  const shortFilms = JSON.parse(localStorage.getItem('shortFilms'));

  React.useEffect(() => {
    if (localStorageData) {
      setSearchBarText(localStorageData.searchText);
      setCheckboxShortFilms(shortFilms);
      setMoviesList(localStorageData.movies);
      if (localStorageData.movies.length === 0) {
        setSearchText('Ничего не найдено');
      }
    }
  }, []);

  React.useEffect(() => {
    checkboxShortFilms
      ? setMoviesList(searchMovies.filter((movie) => movie.duration <= 40))
      : setMoviesList(searchMovies);
    localStorage.setItem('shortFilms', checkboxShortFilms);
  }, [checkboxShortFilms, searchMovies]);

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
    if (cardQuantity && localStorageData) {
      setSearchMovies(localStorageData.movies);
      setMoviesList(localStorageData.movies.slice(0, cardQuantity));
    }
  }, [cardQuantity]);

  function handleSearch(values) {
    setSearchErrorText('');
    setSearchText('');
    setMoviesList([]);
    if (allMovies.length === 0) {
      setIsLoading(true);
      loadMovies()
        .then((movies) => {
          setAllMovies(movies);
          searchFilms(movies, values);
        })
        .catch(err => {
          console.log(err);
          setSearchText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      searchFilms(allMovies, values);
    }
  }

  function searchFilms(movies, values) {
    const searchMovies = getSearchMovieList(movies, values);
    const viewMovies = searchMovies.slice(0, cardQuantity);
    const localStorageData = {
      searchText: values.search,
      movies: searchMovies,
    }
    localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
    localStorage.setItem('shortFilms', values.checkbox);
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
        searchMovies={searchMovies}
        searchText={searchText}
        handleMoreFilms={handleMoreFilms}
        onMovieLike={handleMovieLike}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
      />
    </>
  );
}

export default Movies;