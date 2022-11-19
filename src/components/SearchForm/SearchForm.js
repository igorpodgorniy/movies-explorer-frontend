import './SearchForm.css';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';

function SearchForm({ onSearch, searchErrorText, setSearchErrorText }) {
  const {values, handleChange} = useForm({ search: '', checkbox: false });
  const searchValid = useValidation(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.search) {
      setSearchErrorText('Нужно ввести ключевое слово')
      return;
    }

    onSearch(values);
  }
  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
      noValidate>
      <div className="search-bar__container">
        <span className="search-bar__icon"></span>
        <input
          type="text"
          name="search"
          className="search-bar__input"
          placeholder="Фильм"
          value={values.search}
          onChange={(e) => {
            handleChange(e);
            searchValid.validation(e);
          }}
          required/>
        <button type="submit" className="search-bar__button" aria-label="Найти фильм"></button>
        <div className="search-bar__short-film">
          <input
            type="checkbox"
            name="checkbox"
            className="search-bar__checkbox"
            id="shortFilm"
            checked={values.checkbox}
            onChange={(e) => {
              handleChange(e);
            }}
            required/>
          <label htmlFor="shortFilm" className="search-bar__checkbox-label"></label>
          <span className="search-bar__checkbox-text">Короткометражки</span>
        </div>
        <span className='search-bar__error'>{searchErrorText}</span>
      </div>
    </form>
  );
}

export default SearchForm;