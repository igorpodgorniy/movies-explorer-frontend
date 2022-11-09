import '../Register/Register.css';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <form id="registration" className="sign__form">
        <fieldset className="sign__fieldset">
          <legend className="sign__title">Рады видеть!</legend>
          <label className="sign__label" for="email">E-mail</label>
          <input
            className="sign__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            placeholder="Введите email"
          />
          <label className="sign__label" for="password">Пароль</label>
          <input
            className="sign__input"
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
          <button type="submit" className="sign__button">Войти</button>
        </fieldset>
        <p className="sign__text">Ещё не зарегистрированы?<NavLink to="/signup" className="sign__link">Регистрация</NavLink></p>
      </form>
    </>
  );
}

export default Login;