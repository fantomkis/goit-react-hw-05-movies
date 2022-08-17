import React from 'react';
import MoviesList from '../MoviesList/MoviesList';

function Sectins({ trends }) {
  return (
    <div>
      <h1>Tranding day</h1>
      <MoviesList trends={trends} />
    </div>
  );
}

export default Sectins;
