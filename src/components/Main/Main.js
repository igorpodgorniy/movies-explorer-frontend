import './Main.css';

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
      <section class="about-project">
        <h2 class="section-title">О проекте</h2>
        <ul class="about-project__list">
          <li>
            <h3 class="about-roject__title">Дипломный проект включал 5 этапов</h3>
            <p class="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li>
            <h3 class="about-roject__title">На выполнение диплома ушло 5 недель</h3>
            <p class="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <section class="about-project__timeline">
          <span class="about-project__time about-project__time_dark">1 неделя</span>
          <span class="about-project__time">4 недели</span>
          <h4 class="about-project__time-title">Back-end</h4>
          <h4 class="about-project__time-title">Front-end</h4>
        </section>
      </section>
      <section class="technologies">
        <h2 class="section-title">Технологии</h2>
        <h3 class="technologies__subtitle">7 технологий</h3>
        <p class="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul class="technologies__list">
          <li class="technologies__item">HTML</li>
          <li class="technologies__item">CSS</li>
          <li class="technologies__item">JS</li>
          <li class="technologies__item">React</li>
          <li class="technologies__item">Git</li>
          <li class="technologies__item">Express.js</li>
          <li class="technologies__item">mongoDB</li>
        </ul>
      </section>
    </main>
  );
}

export default Main;