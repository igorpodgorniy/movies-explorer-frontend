import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { auth, api } from '../../utils/MainApi';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(true); // TODO заменить на false
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRequestDonePopupOpen, setRequestDonePopupOpen] = React.useState(false);
  const [isRequestDone, setRequestDone] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [textSuccess, setTextSuccess] = React.useState('');

  React.useEffect(() => {
    if (tokenCheck()) {
      history.push(history.location.pathname);
    } else {
      signOut();
    }
  }, []);

  function tokenCheck() {
    let isLogin = false;
    if (localStorage.getItem('isLogin')) {
      isLogin = localStorage.getItem('isLogin');
      setLoggedIn(true);
    }
    return isLogin;
  }

  function signOut() {
    auth.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('isLogin');
        history.push('./signin');
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then(() => {
        setTextSuccess('Вы успешно вошли!');
        setRequestDone(true);
        setTimeout(() => {
          localStorage.setItem('isLogin', true);
          handleLogin();
          closeAllPopups();
          history.push('./');
        }, 1000);
      })
      .catch((err) => {
        setRequestDone(false);
        console.log(err);
      })
      .finally(() => {
        setRequestDonePopupOpen(true);
      });
  }

  function handleUpdateUser(newData) {
    setIsLoading(true);
    api.editProfile(newData)
      .then((data) => {
        setCurrentUser({...data});
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closeAllPopups() {
    setRequestDonePopupOpen(false);
  }

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
          dataUser={currentUser}
          onLogOut={signOut}
          isLoading={isLoading}
          onUpdateUser={handleUpdateUser}
          mainComponent={Profile}
          headerComponent={Header}
          additionalСlassForHeader='header_type_all'
        />
        <Route path="/signin">
          <Header loggedIn={false} additionalСlass='header_type_sign'/>
          <Login onLogin={handleLoginSubmit} isLoading={isLoading}/>
        </Route>
        <Route path="/signup">
          <Header loggedIn={false} additionalСlass='header_type_sign'/>
          <Register isLoading={isLoading}/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <InfoTooltip
        isOpen={isRequestDonePopupOpen}
        isDone={isRequestDone}
        onClose={closeAllPopups}
        textSuccess={textSuccess}
        ariaLabel="Закрыть окно с результатом"
      />
    </>
  );
}

export default App;
