// import { fetchTrendingMovies } from './fetches';

// const refs = {
//   container: document.querySelector('.container'),
//   trendingList: document.querySelector('.trending_list'),
// };

// async function renderTrendingCards() {
//   try {
//     const data = await fetchTrendingMovies();
//     console.log(data);
//     const markup = data
//       .map(({ backdrop_path, title }) => {
//         return `<li><img src="https://image.tmdb.org/t/p/w500${backdrop_path}" /><p>${title}</p></li>`;
//       })
//       .join(' ');
//     refs.trendingList.insertAdjacentHTML('beforeend', markup);
//   } catch (error) {}
// }

// renderTrendingCards();
