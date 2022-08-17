import { useParams, Outlet } from 'react-router-dom';
import { getOneMovie } from '../api/api';
import { useState, useEffect, Suspense } from 'react';
import Loader from '../components/Loader/Loader';
import Movies from '../components/Movies/Movies';
import MovieInfo from 'components/MovieInfo/MovieInfo';

function MovieDetails(props) {
  const [film, setFilm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneMovie(id)
      .then(res => {
        setFilm(res);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <section>
      {film && <Movies movie={film} />}
      {film && <MovieInfo />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
}

export default MovieDetails;
