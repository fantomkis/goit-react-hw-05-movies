// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NotFoundView from '../components/NotFoundView/NotFoundView';
import Main from '../components/Main/Main';

const HomePage = lazy(() => import('../page/HomePage'));
const MuviesPage = lazy(() => import('../page/MuviesPage'));
const MovieDetails = lazy(() => import('../page/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MuviesPage />} />
          <Route path="movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  );
};
