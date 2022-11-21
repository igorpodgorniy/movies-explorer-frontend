import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  const { savedMovies, setSavedMovies } = props;
  return (
    <>
      <SearchForm />
      <MoviesCardList
        moviesList={savedMovies}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
      />
    </>
  );
}

export default SavedMovies;