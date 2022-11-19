import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const {
    onSearch,
    searchErrorText,
    setSearchErrorText,
    isLoading,
    moviesList,
    searchText,
  } = props;
  return (
    <>
      <SearchForm
        onSearch={onSearch}
        searchErrorText={searchErrorText}
        setSearchErrorText={setSearchErrorText}
      />
      {isLoading && <Preloader />}
      <MoviesCardList moviesList={moviesList} searchText={searchText} />
    </>
  );
}

export default Movies;