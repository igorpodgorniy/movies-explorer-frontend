import './Header.css';

function Header() {
  return (
    <header class="header">
      <a href="#" class="header__logo"></a>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link nav__link_active">Фильмы</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Сохранённые фильмы</a></li>
        </ul>
      </nav>
      <button type="button" class="header__button">
        <span class="header__button-icon"></span>
        Аккаунт
      </button>
      <nav class="header__user-nav">
        <a href="#" class="header__link">Регистрация</a>
        <a href="#" class="header__link header__link_dark">Войти</a>
      </nav>
    </header>
  )
}

export default Header;
