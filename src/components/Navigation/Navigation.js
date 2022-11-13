import './Navigation.css';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation(props) {
  const history = useHistory();
  const { isLogin } = props;
  const navClassName = `nav ${history.location.pathname !== '/' ? 'nav_without-profile' : ''}`;
  return (
    <>
      {(history.location.pathname === '/movies' || history.location.pathname === '/saved-movies' || history.location.pathname === '/profile') &&
        <>
          <input type="checkbox" id="ticker" className="nav__hamburger-ticker"></input>
          <label for="ticker" className="nav__hamburger">
            <div className="nav__nav-bar nav__nav-bar_position_top"></div>
            <div className="nav__nav-bar nav__nav-bar_position_middle"></div>
            <div className="nav__nav-bar nav__nav-bar_position_bottom"></div>
          </label>
        </>
      }
      {(isLogin || history.location.pathname === '/') &&
        <div className="nav__container">
          <nav className={navClassName}>
            <ul className="nav__list">
              <li className="nav__item nav__item_hidden">
                <NavLink exact to="/" activeClassName='nav__link_active' className="nav__link nav__item_hidden">Главная</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/movies" activeClassName='nav__link_active' className="nav__link">Фильмы</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/saved-movies" activeClassName='nav__link_active' className="nav__link">Сохранённые фильмы</NavLink>
              </li>
            </ul>
            {history.location.pathname !== '/' &&
              <button type="button" className="nav__button" onClick={() => history.push('/profile')}>
                <span className="nav__button-icon"></span>
                Аккаунт
              </button>
            }
          </nav>
        </div>
      }
    </>
  );
}

export default Navigation;