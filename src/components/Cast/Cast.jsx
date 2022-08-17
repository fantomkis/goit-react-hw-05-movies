import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api/api';
import placeholder from '../../imeges/posterholder.jpg';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id)
      .then(res => {
        setCast(res);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      {cast.length ? (
        <ul>
          {cast.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : placeholder
                }
                alt={`${el.name}`}
              />
              <p>{el.name}.</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any casts for this movie"
      )}
    </div>
  );
}

export default Cast;
