import { useState } from 'react';

import s from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
import api from '../../api/api';

function Home(props) {
  const location = useLocation();
  const [data, setData] = useState([]);

  api().then(resgjys => setData(resgjys.results));

  return (
    <div className={s.list}>
      console.log(data);
      <Link />
      <ul>
        {data.map(({ original_title, id }) => (
          <li>
            <Link to={id} className={s.film} state={{ location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
