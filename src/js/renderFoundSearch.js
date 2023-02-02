import { fetchMovieBySearch } from './fetches';

const refs = {
  searchMovies: document.querySelector('.search'),
  foundMovies: document.querySelector('.found_movies'),
  searchBtn: document.querySelector('.search_btn'),
};

// refs.searchMovies.addEventListener('input', onInputValue);
refs.searchBtn.addEventListener('click', onBtnSearch);

let page = 1;
let language = 'UA';

async function getData(query, page, language) {
  const data = await fetchMovieBySearch(query, page, language);
  // console.log(data);

  renderFoundSearch(data);
}

function renderFoundSearch(data) {
  const markup = data
    .map(({ poster_path, original_title, id }) => {
      if (poster_path === null) {
        return;
      }
      return `<li class="found_item"><img id="${id}" class="found_image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"/></li>`;
    })
    .join('');

  refs.foundMovies.insertAdjacentHTML('beforeend', markup);
}

// function onInputValue(e) {
//   const query = e.currentTarget.value;
//   if (query === '') {
//     refs.foundMovies.innerHTML = '';
//     return;
//   }

//   getData(query, page, language);

//   // console.log(e.target.value);
// }

function onBtnSearch() {
  const query = refs.searchMovies.value;
  if (query === '') {
    refs.foundMovies.innerHTML = '';
    return;
  }

  console.log(query);

  getData(query, page, language);
}
