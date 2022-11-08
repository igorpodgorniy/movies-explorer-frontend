import './NotFound.css';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-fount__header">404</h1>
      <p className="not-fount__text">Страница не найдена</p>
      <NavLink to="/" className="not-found__link">Назад</NavLink>
    </section>
  );
}

export default NotFound;