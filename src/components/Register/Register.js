import './Register.css';
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';

function Register({ onRegister, isLoading }) {
  const {values, handleChange} = useForm({name: '', email: '', password: ''});
  const nameValid = useValidation(true);
  const emailValid = useValidation(true);
  const passwordValid = useValidation(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.email || !values.password || !nameValid) {
      return;
    }

    onRegister(values.name, values.email, values.password);
  }

  return (
    <main>
      <form
        id="registration"
        className="sign__form"
        onSubmit={handleSubmit}
        noValidate>
        <fieldset className="sign__fieldset">
          <legend className="sign__title">Добро пожаловать!</legend>
          <label className="sign__label" htmlFor="name">Имя</label>
          <div className='sign__input-container'>
            <input
              className="sign__input"
              name="name"
              type="text"
              minLength="2"
              pattern="[A-Za-zА-Яа-яЁё -]{0,}"
              title="Допустимы только латиница, кириллица, пробел или дефис"
              value={values.name}
              onChange={(e) => {
                handleChange(e);
                nameValid.validation(e);
              }}
              placeholder="Введите имя"
              autoComplete="off"
              disabled={isLoading}
              required
            />
            <span className="sign__error">
              {nameValid.isWrong && nameValid.errorMessage}
            </span>
          </div>
          <label className="sign__label" htmlFor="email">E-mail</label>
          <div className='sign__input-container'>
            <input
              className="sign__input"
              name="email"
              type="email"
              minLength="6"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                emailValid.validation(e);
              }}
              placeholder="Введите email"
              autoComplete="off"
              disabled={isLoading}
              required
            />
            <span className="sign__error">
              {emailValid.isWrong && emailValid.errorMessage}
            </span>
          </div>
          <label className="sign__label" htmlFor="password">Пароль</label>
          <div className='sign__input-container'>
            <input
              className="sign__input"
              name="password"
              type="password"
              minLength="3"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                passwordValid.validation(e);
              }}
              placeholder="Введите пароль"
              autoComplete="off"
              disabled={isLoading}
              required
            />
            <span className="sign__error">
              {passwordValid.isWrong && passwordValid.errorMessage}
            </span>
          </div>
          <button
            type="submit"
            className="sign__button"
            disabled={
              nameValid.isWrong
              || emailValid.isWrong
              || passwordValid.isWrong
              || values.name === ""
              || values.email === ""
              || values.password === ""
              || isLoading
            }>
              {isLoading ? 'Отправка данных' : 'Зарегистрироваться'}
            </button>
        </fieldset>
        <p className="sign__text">Уже зарегистрированы?<NavLink to="/signin" className="sign__link">Войти</NavLink></p>
      </form>
    </main>
  );
}

export default Register