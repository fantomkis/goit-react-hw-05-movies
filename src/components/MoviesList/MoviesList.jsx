import s from './MoviasList.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function Home({ trends }) {
  const location = useLocation();

  return (
    <div className={s.list}>
      <ul>
        {trends &&
          trends.map(({ title, id }) => (
            <li key={id}>
              <NavLink
                to={`/movie/${id}`}
                className={s.film}
                state={{ location }}
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
