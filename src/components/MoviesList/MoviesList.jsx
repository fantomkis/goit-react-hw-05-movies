import s from './MoviasList.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function MoviasList({ trends }) {
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
                state={{ from: location ?? '/' }}
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviasList;
