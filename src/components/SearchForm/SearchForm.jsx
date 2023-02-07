const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
