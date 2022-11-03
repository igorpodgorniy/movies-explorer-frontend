import '../Register/Register.css';

function Login() {
  return (
    <>
      <header className="header header_type_sign">
        <a href="#" className="header__logo"></a>
      </header>
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
          <button type="submit" className="sign__button sign__button_bottom">Войти</button>
        </fieldset>
        <p className="sign__text">Ещё не зарегистрированы?<a href="#" className="sign__link">Регистрация</a></p>
      </form>
    </>
  );
}

export default Login;