import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-bar">
      <div className="search-bar__container">
        <span className="search-bar__icon"></span>
        <input type="search" className="search-bar__input" placeholder="Фильм"/>
        <button type="button" className="search-bar__button"></button>
        <div className="search-bar__short-film">
          <input type="checkbox" className="search-bar__checkbox" id="shortFilm" />
          <label for="shortFilm" className="search-bar__checkbox-label"></label>
          <span className="search-bar__checkbox-text">Короткометражки</span>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;