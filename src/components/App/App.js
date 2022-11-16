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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const loggedIn = true;
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={false} additionalСlass='header_type_all' />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute
          path='/movies'
          loggedIn={loggedIn}
          mainComponent={Movies}
          headerComponent={Header}
          footerComponent={Footer}
          additionalСlassForHeader='header_type_all'
        />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          mainComponent={SavedMovies}
          headerComponent={Header}
          footerComponent={Footer}
          additionalСlassForHeader='header_type_all'
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          mainComponent={Profile}
          headerComponent={Header}
          additionalСlassForHeader='header_type_all'
        />
        <Route path="/signin">
          <Header loggedIn={false} additionalСlass='header_type_sign'/>
          <Login />
        </Route>
        <Route path="/signup">
          <Header loggedIn={false} additionalСlass='header_type_sign'/>
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
