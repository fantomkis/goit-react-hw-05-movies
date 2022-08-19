import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { normalizedYearOfMovie, normolizedGenres } from '../../helper/helper';
import placeholder from '../../imeges/posterholder.jpg';
import s from './Movies.moduls.css';

function Movies({ movie }) {
  const { poster_path, vote_average, overview, title, release_date, genres } =
    movie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const normalizedUserScore = (vote_average * 10).toFixed(0);

  return (
    <>
      <Link to={backLinkHref} className={s.button}>
        Go back
      </Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : placeholder
          }
          alt={`${title}`}
        />
        <div>
          <h2>{`${title} (${normalizedYearOfMovie(release_date)})`}</h2>
          <p>
            <span>User score: </span> {normalizedUserScore}%
          </p>
          <p>
            <span>Overview: </span> {overview}
          </p>
          <p>
            <span>Genes:</span> {normolizedGenres(genres)}
          </p>
        </div>
      </div>
    </>
  );
}

Movies.propTypes = {
  info: PropTypes.shape({
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    original_title: PropTypes.string,
  }),
};

export default Movies;
