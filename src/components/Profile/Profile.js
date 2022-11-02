import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <form name="profile" id="profileForm" className="profile__form">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            name="name"
            type="text"
            value="Виталий"
            placeholder="Введите имя"
          />
        </label>
        <label className="profile__label">
          Email
          <input
            className="profile__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            placeholder="Введите email"
          />
        </label>
        <button className="profile__button" type="button">Редактировать</button>
      </form>
      <button className="profile__button profile__button_color_red" type="button">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;