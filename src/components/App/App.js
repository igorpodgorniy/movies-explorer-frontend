import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <>
      <NotFound></NotFound>
      <Header></Header>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
