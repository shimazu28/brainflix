function SearchForm({ className }) {
  return (
    <form className={`${className ? className : ''} form form--search`}>
      <input className="form__field"
        type="search"
        name="keyword"
        placeholder="Search"
        autoComplete="off"
      />
    </form>
  );
}

export default SearchForm;