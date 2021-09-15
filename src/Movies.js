import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading, setPage } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <section className="movies">
        {movies.map((movie) => {
          const {
            imdbID: id,
            Poster: poster,
            Title: title,
            Year: year,
          } = movie;
          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <article>
                <img src={poster === "N/A" ? url : poster} alt={title} />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
      <div className="btn-load">
        <button className="btn" onClick={() => setPage((page) => page + 1)}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Movies;
