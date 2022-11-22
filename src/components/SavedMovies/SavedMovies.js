import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getSearchMovieList } from '../../utils/service';

function SavedMovies(props) {
  const { savedMovies, setSavedMovies } = props;

  const [moviesList, setMoviesList] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [searchErrorText, setSearchErrorText] = React.useState('');
  const [checkboxShortFilms, setCheckboxShortFilms] = React.useState(false);

  React.useEffect(() => {
    setMoviesList(savedMovies);
    setSearchMovies(savedMovies);
  }, [savedMovies]);

  React.useEffect(() => {
    if (searchMovies.length !== 0) {
      checkboxShortFilms
        ? setMoviesList(searchMovies.filter((movie) => movie.duration <= 40))
        : setMoviesList(searchMovies);
    }
  }, [checkboxShortFilms, searchMovies]);

  function handleSearch(values) {
    setSearchErrorText('');
    setSearchText('');
    const searchMovies = getSearchMovieList(savedMovies, values);
    setMoviesList(searchMovies);
    setSearchMovies(searchMovies);
    if (searchMovies.length === 0) {
      setSearchText('Ничего не найдено');
    }
  }

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        checkboxShortFilms={checkboxShortFilms}
        setCheckboxShortFilms={setCheckboxShortFilms}
        searchErrorText={searchErrorText}
        setSearchErrorText={setSearchErrorText}
      />
      <MoviesCardList
        searchText={searchText}
        moviesList={moviesList}
        searchMovies={savedMovies}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        setMoviesList={setMoviesList}
      />
    </>
  );
}

export default SavedMovies;