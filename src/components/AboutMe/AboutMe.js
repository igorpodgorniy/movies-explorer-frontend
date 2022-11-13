import './AboutMe.css';
import photo from '../../images/student-photo.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section id="aboutStudent" className="about-student">
      <h2 className="section-title">Студент</h2>
      <div className="about-student__info">
        <div className="about-student__info-text">
          <p className="about-student__name">Виталий</p>
          <p className="about-student__position">Фронтенд-разработчик, 30 лет</p>
          <p className="about-student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке,
            начал заниматься фриланс&#8209;заказами&nbsp;и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/igorpodgorniy" className="about-student__link" target="_blank">Github</a>
        </div>
        <img className="about-student__img" src={photo} alt="Фотография студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;