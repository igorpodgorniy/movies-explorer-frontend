import './Profile.css';

function Profile() {
  return (
    <main className="profile">
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
            required
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            placeholder="Введите email"
            required
          />
        </label>
        <button className="profile__button" type="button">Редактировать</button>
      </form>
      <button className="profile__button profile__button_color_red" type="button">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;