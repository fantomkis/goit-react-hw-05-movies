// import Home from './Home/Home';
import HomePage from '../page/HomePage';
import MuviesPage from '../page/MuviesPage';
// import Movies from './Movies/Movies';
import Navigat from '../components/Navigat/Navigat';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Navigat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MuviesPage />} />
      </Routes>
    </>
  );
};
