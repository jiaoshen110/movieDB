import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const { isLoading, data: movies, error } = useFetch(`&s=${query}`, page);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, query, setQuery, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
