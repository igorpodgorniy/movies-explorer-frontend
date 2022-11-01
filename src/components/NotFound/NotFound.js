import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-fount__header">404</h1>
      <p className="not-fount__text">Страница не найдена</p>
      <a href="/" className="not-found__link">Назад</a>
    </section>
  );
}

export default NotFound;