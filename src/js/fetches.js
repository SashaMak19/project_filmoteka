import axios from 'axios';

const KEY_API = '8b20680c766bc5c37143e5d6b7aa7894';
const BASE_URL = 'https://api.themoviedb.org/3/';
const page = 1;

// async function fetchData(query, page) {
//   const searchParams = new URLSearchParams({
//     apikey: KEY,
//     keyword: query,
//     page: page,
//     size: 100,
//   });

//   const response = await fetch(`${BASE_URL}events?${searchParams}`);
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return response.json();
// }

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data.results;
}

export async function fetchMovieBySearch(query, page, language) {
  const searchParams = new URLSearchParams({
    api_key: KEY_API,
    language: language,
    query: query,
    page: page,
  });

  const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
  return response.data.results;
}

// GET/movie/{movie_id}

export async function fetchImformationMovie(id, language) {
  const searchParams = new URLSearchParams({
    api_key: KEY_API,
    language: language,
  });

  const response = await axios.get(`${BASE_URL}movie/${id}?${searchParams}`);
  return response.data;
}
