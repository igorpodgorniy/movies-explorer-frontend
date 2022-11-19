import './Profile.css';
import React from 'react';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { onLogOut, onUpdateUser } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const {values, handleChange} = useForm(currentUser);
  const emailValid = useValidation(true);
  const nameValid = useValidation(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.email || !values.name){
      return;
    }

    onUpdateUser({ name: values.name, email: values.email });
  }

  return (
    <main className="profile">
      <form
        name="profile"
        id="profileForm"
        className="profile__form"
        onSubmit={handleSubmit}
        noValidate>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            name="name"
            type="text"
            minLength="2"
            value={values.name || ''}
            onChange={(e) => {
              handleChange(e);
              nameValid.validation(e);
            }}
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
            minLength="6"
            value={values.email || ''}
            onChange={(e) => {
              handleChange(e);
              emailValid.validation(e);
            }}
            placeholder="Введите email"
            required
          />
        </label>
        <button
          className="profile__button"
          type="submit"
          disabled={
            emailValid.isWrong
            || nameValid.isWrong
            || values.email === ""
            || values.name === ""
          }>
            Редактировать
          </button>
      </form>
      <button
        className="profile__button profile__button_color_red"
        onClick={onLogOut}
        type="button">
          Выйти из аккаунта
        </button>
    </main>
  );
}

export default Profile;