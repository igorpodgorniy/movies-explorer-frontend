import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';

function App() {
  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Main></Main>
      <Footer></Footer>
      <NotFound></NotFound>
    </>
  );
}

export default App;
