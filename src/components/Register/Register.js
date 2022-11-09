import './Register.css';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <>
      <form id="registration" className="sign__form">
        <fieldset className="sign__fieldset">
          <legend className="sign__title">Добро пожаловать!</legend>
          <label className="sign__label" for="name">Имя</label>
          <input
            className="sign__input"
            name="name"
            type="text"
            value="Виталий"
            placeholder="Введите имя"
          />
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
            className="sign__input sign__input_error"
            name="password"
            type="password"
            value="••••••••••••••"
            placeholder="Введите пароль"
          />
          <span className="sign__error">Что-то пошло не так...</span>
          <button type="submit" className="sign__button">Зарегистрироваться</button>
        </fieldset>
        <p className="sign__text">Уже зарегистрированы?<NavLink to="/signin" className="sign__link">Войти</NavLink></p>
      </form>
    </>
  );
}

export default Register