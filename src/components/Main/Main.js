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
    </main>
  );
}

export default Main;