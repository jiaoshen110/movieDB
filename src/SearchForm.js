import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setQuery, error, query, setPage } = useGlobalContext();
  const [value, setValue] = React.useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setPage(1);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={handleChange}
      />
      <button className="search-btn btn" type="submit">
        search
      </button>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
