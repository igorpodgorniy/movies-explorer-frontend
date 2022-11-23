import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getSearchMovieList } from '../../utils/service';
import { api } from '../../utils/MainApi';

function SavedMovies(props) {
  const { savedMovies, setSavedMovies, onSignOut } = props;

  const [moviesList, setMoviesList] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [searchErrorText, setSearchErrorText] = React.useState('');
  const [searchBarText, setSearchBarText] = React.useState('');
  const [checkboxShortFilms, setCheckboxShortFilms] = React.useState(false);

  React.useEffect(() => {
    setMoviesList(savedMovies);
    setSearchMovies(savedMovies);
    handleSearch({ search: searchBarText, checkbox: checkboxShortFilms });
  }, [savedMovies]);

  // ищет фильмы, когда переключается чекбокс
  React.useEffect(() => {
    if (savedMovies && savedMovies.length !== 0) {
      handleSearch({ search: searchBarText, checkbox: checkboxShortFilms});
    }
  }, [checkboxShortFilms]);

  function handleSearch(values) {
    setSearchErrorText('');
    setSearchText('');
    const searchMovies = getSearchMovieList(savedMovies, values.search, values.checkbox);

    // добавляет значение в стейт
    setSearchBarText(values.search);
    setMoviesList(searchMovies);
    setSearchMovies(searchMovies);
    if (searchMovies.length === 0 && savedMovies.length !== 0) {
      setSearchText('Ничего не найдено');
    }
  }

  function handleMovieDelete(movieId) {
    api.deleteMovie(movieId)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== movieId));
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
      <MoviesCardList
        moviesList={moviesList}
        searchMovies={searchMovies}
        searchText={searchText}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        onSignOut={onSignOut}
        onMovieDelete={handleMovieDelete}
      />
    </>
  );
}

export default SavedMovies;