import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovie = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=51e857d652bdf59e8f84bee32e922fd2&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const error = "Please enter some value for the movie";
  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurrasic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {query === "" ? (
        <div className="error">{error}</div>
      ) : (
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movieData={movie} key={movie.key} />
            ))}
        </div>
      )}
    </>
  );
}

export default SearchMovies;
