import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <section className="footer__vault">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/igorpodgorniy" className="footer__link" target="_blank">Github</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;