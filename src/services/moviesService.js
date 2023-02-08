import axios from 'axios';

const API_KEY = '49d58752bc6e5141ad9221de58add4b1';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  return await axios
    .get(
      `
${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    )
    .then(r => r.data);
};

export const getMoviesByName = async name => {
  return await axios
    .get(
      `
${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`
    )
    .then(r => r.data);
};

export const getMovieDetails = async id => {
  return await axios
    .get(
      `
${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    )
    .then(r => r.data);
};

export const getCredits = async id => {
  return await axios
    .get(
      `
${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    )
    .then(r => r.data);
};

export const getReviewes = async id => {
  return await axios
    .get(
      `
${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    )
    .then(r => r.data);
};
