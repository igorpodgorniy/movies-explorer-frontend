import '../Register/Register.css';
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';

function Login({ onLogin, isLoading }) {
  const {values, handleChange} = useForm({email: '', password: ''});
  const emailValid = useValidation(true);
  const passwordValid = useValidation(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.email || !values.password){
      return;
    }

    onLogin(values.email, values.password);
  }

  return (
    <main>
      <form
        id="registration"
        className="sign__form"
        onSubmit={handleSubmit}
        noValidate>
        <fieldset className="sign__fieldset">
          <legend className="sign__title">Рады видеть!</legend>
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
              emailValid.isWrong
              || passwordValid.isWrong
              || values.email === ""
              || values.password === ""
            }>
              Войти
            </button>
        </fieldset>
        <p className="sign__text">Ещё не зарегистрированы?<NavLink to="/signup" className="sign__link">Регистрация</NavLink></p>
      </form>
    </main>
  );
}

export default Login;