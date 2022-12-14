import './Profile.css';
import React from 'react';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { onLogOut, onUpdateUser, isLoading } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const {values, setValues, handleChange} = useForm({ name: '', email: '' });
  const emailValid = useValidation(false);
  const nameValid = useValidation(false);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

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
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            name="name"
            type="text"
            minLength="2"
            pattern="[A-Za-zА-Яа-яЁё -]{0,}"
            title="Допустимы только латиница, кириллица, пробел или дефис"
            value={values.name || ''}
            onChange={(e) => {
              handleChange(e);
              nameValid.validation(e);
            }}
            placeholder="Введите имя"
            autoComplete="off"
            disabled={isLoading}
            required
          />
          <span className="profile__error">
            {nameValid.isWrong && nameValid.errorMessage}
          </span>
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
            autoComplete="off"
            disabled={isLoading}
            required
          />
          <span className="profile__error profile__error_type_last ">
            {emailValid.isWrong && emailValid.errorMessage}
          </span>
        </label>
        <button
          className="profile__button"
          type="submit"
          disabled={
            (values.email === currentUser.email
            && values.name === currentUser.name)
            || emailValid.isWrong
            || nameValid.isWrong
            || isLoading
          }>
            {isLoading ? 'Сохранение...' : 'Редактировать'}
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