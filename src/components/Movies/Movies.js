import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ onSearch, searchErrorText, setSearchErrorText, isLoading, moviesList }) {
  return (
    <>
      <SearchForm
        onSearch={onSearch}
        searchErrorText={searchErrorText}
        setSearchErrorText={setSearchErrorText}
      />
      {isLoading && <Preloader />}
      <MoviesCardList moviesList={moviesList} />
    </>
  );
}

export default Movies;