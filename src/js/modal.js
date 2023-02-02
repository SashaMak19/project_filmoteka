import { fetchImformationMovie } from './fetches';

const refs = {
  foundList: document.querySelector('.found_movies'),
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.close'),
  image: document.querySelector('.image'),
  modal: document.querySelector('.modal'),
  modalWrapper: document.querySelector('.modal_wrapper'),
  // movieTitle: document.querySelector('.movie_title'),
};

// console.log(refs.image);

refs.foundList.addEventListener('click', onClickItem);
refs.closeBtn.addEventListener('click', onCloseModal);
document.addEventListener('keydown', onCloseModayByEsc);

function onCloseModayByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
    console.log(e.code);
  }
}

// if (refs.backdrop.classList.contains('is-hidden')) {
//   document.addEventListener('keydown', onCloseModayByEsc);
// }

// if (refs.backdrop.classList.contains('is-hidden')) {
//   document.removeEventListener('keydown', onCloseModayByEsc);
// }

async function getData(id) {
  const data = await fetchImformationMovie(id);
  console.log(data);
  renderCardOfMovie(data);
}

function renderCardOfMovie(data) {
  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = data;
  // const markup = `<p>${vote_average}</p>`;
  const genresOfMovie = genres.map(genres => genres.name);
  console.log(genresOfMovie.join(''));
  const markup = `
          <h2>${title}</h2>
          <p>Vote / Votes<span>${vote_average}</span> / <span>${vote_count}</span></p>
          <p>Popularity<span>${popularity.toFixed(1)}</span></p>
          <p>Original Title                        <span>${original_title}</span></p>
          <p>Genre<span>${genresOfMovie.join(', ')}</span></p>
          <h3>About</h3>
          <p>${overview}</p>
        `;

  // const markup = `<div><img class="image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/></div>`;
  refs.modalWrapper.insertAdjacentHTML('beforeend', markup);
}

function onClickItem(e) {
  const idOfImage = e.target.id;
  // console.log(e.target);
  if (e.target.nodeName === 'IMG') {
    getData(idOfImage);
    refs.backdrop.classList.remove('is-hidden');
    refs.image.src = e.target.src;
    // console.log(e.target.alt);
    // refs.movieTitle.textContent = e.target.alt;
  }
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  refs.image.src = '';
  refs.modalWrapper.innerHTML = '';
}
