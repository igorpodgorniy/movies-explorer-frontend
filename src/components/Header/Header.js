import './Header.css';
import { NavLink, useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <header className="header header_type_all">
      <NavLink to='/' className="header__logo"></NavLink>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><NavLink to="/movies" activeClassName='nav__link_active' className="nav__link">Фильмы</NavLink></li>
          <li className="nav__item"><NavLink to="/saved-movies" activeClassName='nav__link_active' className="nav__link">Сохранённые фильмы</NavLink></li>
        </ul>
      </nav>
      <button type="button" className="header__button" onClick={() => history.push('/profile')}>
        <span className="header__button-icon"></span>
        Аккаунт
      </button>
      <div class="header__hamburger">
        <div class="header__nav-bar header__nav-bar_position_top"></div>
        <div class="header__nav-bar header__nav-bar_position_middle"></div>
        <div class="header__nav-bar header__nav-bar_position_bottom"></div>
      </div>
      <ul className="header__user-nav">
        <li><NavLink to="/signup" className="header__link">Регистрация</NavLink></li>
        <li><NavLink to="/signin" className="header__link header__link_dark">Войти</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;
