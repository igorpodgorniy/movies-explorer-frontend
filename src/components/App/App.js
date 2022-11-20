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
import SignRoute from '../SignRoute/SignRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth, api } from '../../utils/MainApi';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('isLogin') || false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRequestDonePopupOpen, setRequestDonePopupOpen] = React.useState(false);
  const [isRequestDone, setRequestDone] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [textSuccess, setTextSuccess] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        if (userInfo) {
          setLoggedIn(true);
          setCurrentUser(userInfo);
        }
      })
      .catch(err => {
        signOut();
        console.log(err);
      });
  }, []);

  function signOut() {
    auth.logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({name: '', email: ''});
        localStorage.clear();
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleLogin(data, textSuccess) {
    setTextSuccess(textSuccess);
    setRequestDone(true);
    localStorage.setItem('isLogin', true);
    setTimeout(() => {
      setLoggedIn(true);
      setCurrentUser(data);
      setRequestDonePopupOpen(false);
      history.push('/movies');
    }, 1000);
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((res) => {
        if (res.data) {
          handleLogin(res.data, 'Вы успешно вошли!');
        }
      })
      .catch((err) => {
        setRequestDone(false);
        console.log(err);
      })
      .finally(() => {
        setRequestDonePopupOpen(true);
      });
  }

  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        if (res.data) {
          handleLogin(res.data, 'Вы успешно зарегистрировались!');
        }
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
        setCurrentUser(data);
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
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn} additionalСlass='header_type_all' />
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
          onLogOut={signOut}
          isLoading={isLoading}
          onUpdateUser={handleUpdateUser}
          mainComponent={Profile}
          headerComponent={Header}
          additionalСlassForHeader='header_type_all'
        />
        <SignRoute
          path="/signin"
          loggedIn={loggedIn}
          isLoading={isLoading}
          mainComponent={Login}
          onLogin={handleLoginSubmit}
          headerComponent={Header}
          additionalСlassForHeader='header_type_sign'
        />
        <SignRoute
          path="/signup"
          loggedIn={loggedIn}
          isLoading={isLoading}
          mainComponent={Register}
          onRegister={handleRegisterSubmit}
          headerComponent={Header}
          additionalСlassForHeader='header_type_sign'
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
