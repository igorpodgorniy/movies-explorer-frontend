import './NavTab.css';

function NavTab() {
  return (
    <ul className="nav-tab__buttons">
      <li><a href="#aboutProject" className="nav-tab__button">О проекте</a></li>
      <li><a href="#aboutTechnologies" className="nav-tab__button">Технологии</a></li>
      <li><a href="#aboutStudent" className="nav-tab__button">Студент</a></li>
    </ul>
  );
}

export default NavTab;