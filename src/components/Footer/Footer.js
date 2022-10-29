import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <section className="footer__vault">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__links">
          <li><a href="#" className="footer__link">Яндекс.Практикум</a></li>
          <li><a href="#" className="footer__link">Github</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;