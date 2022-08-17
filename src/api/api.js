import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '82c59d753050746a09d77670604a0453',
  },
});

export const getSearchMovies = async query => {
  const response = await API(`/search/movie`, {
    params: {
      query,
    },
  });
  const data = await response.data.results;
  console.log(data);
  return data;
};

export const getTrending = async () => {
  const response = await API(`trending/movie/week`);
  const data = await response.data;
  // console.log(data);
  return data;
};

export const getOneMovie = async id => {
  const response = await API(`movie/${id}`);
  const data = await response.data;
  // console.log(data);
  return data;
};

export const getCast = async id => {
  const response = await API(`movie/${id}/credits`);
  const data = await response.data;
  // console.log(data);
  return data.cast;
};

export const getReviews = async id => {
  const response = await API(`movie/${id}/reviews`);
  const data = await response.data;
  // console.log(data);
  return data.results;
};
