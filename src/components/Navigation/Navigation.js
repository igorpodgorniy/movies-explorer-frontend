import './Navigation.css';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation(props) {
  const history = useHistory();
  const { isLogin } = props;
  return (
    <>
      {(isLogin || history.location.pathname === '/')&&
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><NavLink to="/movies" activeClassName='nav__link_active' className="nav__link">Фильмы</NavLink></li>
            <li className="nav__item"><NavLink to="/saved-movies" activeClassName='nav__link_active' className="nav__link">Сохранённые фильмы</NavLink></li>
          </ul>
        </nav>
      }
      {(history.location.pathname === '/movies' || history.location.pathname === '/saved-movies' || history.location.pathname === '/profile') &&
        <>
          <button type="button" className="header__button" onClick={() => history.push('/profile')}>
            <span className="header__button-icon"></span>
            Аккаунт
          </button>
          <div className="header__hamburger">
            <div className="header__nav-bar header__nav-bar_position_top"></div>
            <div className="header__nav-bar header__nav-bar_position_middle"></div>
            <div className="header__nav-bar header__nav-bar_position_bottom"></div>
          </div>
        </>
      }
    </>
  );
}

export default Navigation;