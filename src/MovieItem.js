import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function MovieItem({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie" id={id}>
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h3 className="movie-year">{year}</h3>
        <h3 className="movie-summary">{summary}</h3>
        <ul className="movie-genres">
          {genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieItem;
