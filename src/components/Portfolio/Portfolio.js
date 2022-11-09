import './Portfolio.css';

function Portfolio() {
  return (
    <>
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/igorpodgorniy/how-to-learn" rel="noreferrer" className="portfolio__link" target="_blank">
            <span>Статичный сайт</span>
            <span className="portfolio__arrow"></span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/igorpodgorniy/russian-travel" rel="noreferrer" className="portfolio__link" target="_blank">
            <span>Адаптивный сайт</span>
            <span className="portfolio__arrow"></span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/igorpodgorniy/react-mesto-api-full" rel="noreferrer" className="portfolio__link" target="_blank">
            <span>Одностраничное приложение</span>
            <span className="portfolio__arrow"></span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;