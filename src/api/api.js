import axios from 'axios';

const apiSorch = async () => {
  const API_KEY = '0a4aab5daca4d3b8b09b771948ad9265';

  const respons = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return respons.data;
};
export default apiSorch;
