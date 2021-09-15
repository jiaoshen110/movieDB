import { useState, useEffect } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams, page) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        if (data.Search) {
          setData((oldData) => {
            if (oldData && page === 1) {
              return data.Search;
            } else {
              return [...oldData, ...data.Search];
            }
          });
        } else {
          setData(data);
        }
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}&page=${page}`);
  }, [urlParams, page]);

  return { isLoading, error, data };
};

export default useFetch;
