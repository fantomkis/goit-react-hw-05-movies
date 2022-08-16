import { NavLink } from 'react-router-dom';
import s from './Navigat.module.css';

function Navigat(props) {
  return (
    <div className={s.nav}>
      <NavLink to="/" className={s.home}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.home}>
        Movies
      </NavLink>
    </div>
  );
}

export default Navigat;
