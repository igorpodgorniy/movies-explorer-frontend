import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header isLogin={false} additionalСlass='header_type_all' />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header isLogin={true} additionalСlass='header_type_all' />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header isLogin={true} additionalСlass='header_type_all'/>
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header isLogin={true} additionalСlass='header_type_all'/>
          <Profile />
        </Route>
        <Route path="/signin">
          <Header isLogin={false} additionalСlass='header_type_sign'/>
          <Login />
        </Route>
        <Route path="/signup">
          <Header isLogin={false} additionalСlass='header_type_sign'/>
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
