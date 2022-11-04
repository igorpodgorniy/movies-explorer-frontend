import './Header.css';

function Header() {
  return (
    <header className="header header_type_all">
      <a href="#" className="header__logo"></a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link nav__link_active">Фильмы</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Сохранённые фильмы</a></li>
        </ul>
      </nav>
      <button type="button" className="header__button">
        <span className="header__button-icon"></span>
        Аккаунт
      </button>
      {/* <div class="header__hamburger">
        <div class="header__nav-bar header__nav-bar_position_top"></div>
        <div class="header__nav-bar header__nav-bar_position_middle"></div>
        <div class="header__nav-bar header__nav-bar_position_bottom"></div>
      </div> */}
      <ul className="header__user-nav">
        <li><a href="#" className="header__link">Регистрация</a></li>
        <li><a href="#" className="header__link header__link_dark">Войти</a></li>
      </ul>
    </header>
  )
}

export default Header;
