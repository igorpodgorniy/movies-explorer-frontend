import React from 'react';
import './SearchForm.css';
import useForm from '../../hooks/useForm';

function SearchForm(props) {
  const {
    onSearch,
    searchErrorText,
    setSearchErrorText,
    searchBarText,
    checkboxShortFilms,
    setCheckboxShortFilms,
  } = props;
  const {values, setValues, handleChange} = useForm({ search: '' });

  React.useEffect(() => {
    if (searchBarText) {
      setValues({ search: searchBarText });
    }
  }, [searchBarText, setValues]);

  function handlerCheckbox() {
    setCheckboxShortFilms(!checkboxShortFilms);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.search) {
      setSearchErrorText('Нужно ввести ключевое слово')
      return;
    }

    onSearch({search: values.search, checkbox: checkboxShortFilms});
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
          }}
          required/>
        <button type="submit" className="search-bar__button" aria-label="Найти фильм"></button>
        <div className="search-bar__short-film">
          <input
            type="checkbox"
            name="checkbox"
            className="search-bar__checkbox"
            id="shortFilm"
            checked={checkboxShortFilms}
            onChange={handlerCheckbox}
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