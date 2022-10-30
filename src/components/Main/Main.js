import './Main.css';
import photo from '../../images/student-photo.png';

function Main() {
  return (
    <main className="main">
      <section className="first-screen">
        <h1 className="first-screen__title">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="first-screen__buttons">
          <li><button type="button" className="first-screen__button">О проекте</button></li>
          <li><button type="button" className="first-screen__button">Технологии</button></li>
          <li><button type="button" className="first-screen__button">Студент</button></li>
        </ul>
      </section>
      <section className="about-project">
        <h2 className="section-title">О проекте</h2>
        <ul className="about-project__list">
          <li>
            <h3 className="about-roject__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li>
            <h3 className="about-roject__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <section className="about-project__timeline">
          <span className="about-project__time about-project__time_dark">1 неделя</span>
          <span className="about-project__time">4 недели</span>
          <h4 className="about-project__time-title">Back-end</h4>
          <h4 className="about-project__time-title">Front-end</h4>
        </section>
      </section>
      <section className="technologies">
        <h2 className="section-title">Технологии</h2>
        <h3 className="technologies__subtitle">7 технологий</h3>
        <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="technologies__list">
          <li className="technologies__item">HTML</li>
          <li className="technologies__item">CSS</li>
          <li className="technologies__item">JS</li>
          <li className="technologies__item">React</li>
          <li className="technologies__item">Git</li>
          <li className="technologies__item">Express.js</li>
          <li className="technologies__item">mongoDB</li>
        </ul>
      </section>
      <section className="about-student">
        <h2 className="section-title">Студент</h2>
        <div className="about-student__info">
          <div className="about-student__info-text">
            <p className="about-student__name">Виталий</p>
            <p className="about-student__position">Фронтенд-разработчик, 30 лет</p>
            <p className="about-student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="#" className="about-student__link">Github</a>
          </div>
          <img className="about-student__img" src={photo} alt="Фотография студента" />
        </div>
      </section>
    </main>
  );
}

export default Main;