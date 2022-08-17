import { useState, useEffect } from 'react';
import Sectins from '../components/Sctions/Sectins';
import { getTrending } from '../api/api';

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => {
        setTrends(res.results);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(trends);
  return (
    <>
      <Sectins trends={trends} />
    </>
  );
};

export default HomePage;
