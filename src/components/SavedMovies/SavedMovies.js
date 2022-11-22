import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getSearchMovieList } from '../../utils/service';

function SavedMovies(props) {
  const { savedMovies, setSavedMovies } = props;

  const [moviesList, setMoviesList] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [searchErrorText, setSearchErrorText] = React.useState('');
  const [checkboxShortFilms, setCheckboxShortFilms] = React.useState(false);

  React.useEffect(() => {
    setMoviesList(savedMovies);
  }, [savedMovies]);

  function handleSearch(values) {
    setSearchErrorText('');
    setSearchText('');
    const searchMovies = getSearchMovieList(savedMovies, values);
    setMoviesList(searchMovies);
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
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
      />
    </>
  );
}

export default SavedMovies;