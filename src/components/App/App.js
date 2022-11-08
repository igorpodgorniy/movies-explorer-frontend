import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      <Header></Header>
      {/* <Profile></Profile> */}
      {/* <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList> */}
      <Main></Main>
      <Footer></Footer>
      {/* <NotFound></NotFound> */}
    </>
  );
}

export default App;
