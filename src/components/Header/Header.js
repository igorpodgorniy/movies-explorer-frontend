import './Header.css';
import { NavLink, useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const history = useHistory();
  const { loggedIn, additionalСlass } = props;
  const headerClassName = `header ${additionalСlass}`;

  return (
    <header className={headerClassName}>
      <NavLink to='/' className="header__logo"></NavLink>
      <Navigation loggedIn={loggedIn}/>
      {history.location.pathname === '/' && !loggedIn &&
        <ul className="header__user-nav">
          <li><NavLink to="/signup" className="header__link">Регистрация</NavLink></li>
          <li><NavLink to="/signin" className="header__link header__link_dark">Войти</NavLink></li>
        </ul>
      }
    </header>
  )
}

export default Header;
