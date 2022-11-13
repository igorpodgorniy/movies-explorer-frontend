import './AboutProject.css';

function AboutProject() {
  return (
    <section id="aboutProject" className="about-project">
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
  );
}

export default AboutProject;