import React from "react";

const MovieCard = ({ movieData }) => {
  return (
    <div className="card" key={movieData.id}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieData.poster_path}`}
        alt={movieData.title + " post"}
      />
      <div className="card--content">
        <h3 className="card--title">{movieData.title}</h3>
        <p>
          <small>RELEASE DATE: {movieData.release_date}</small>
        </p>
        <p>
          <small>RATING: {movieData.vote_average}</small>
        </p>
        <p className="card--desc">{movieData.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
