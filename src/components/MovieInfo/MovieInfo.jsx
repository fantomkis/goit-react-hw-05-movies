import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function MovieInfo(props) {
  const location = useLocation();
  return (
    <div>
      <h3>Additional information</h3>
      <NavLink to="cast" state={location.state}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={location.state}>
        Reviews
      </NavLink>
    </div>
  );
}

export default MovieInfo;
