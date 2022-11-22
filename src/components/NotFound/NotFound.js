import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  function handleBackButton() {
    history.goBack()
  }

  return (
    <main className="not-found">
      <h1 className="not-fount__header">404</h1>
      <p className="not-fount__text">Страница не найдена</p>
      <button onClick={handleBackButton} className="not-found__link">Назад</button>
    </main>
  );
}

export default NotFound;