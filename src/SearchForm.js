import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setQuery, error, query, setPage } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
