import { fetchImformationMovie } from './fetches';

const refs = {
  foundList: document.querySelector('.found_movies'),
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.btn-modal-close'),
  image: document.querySelector('.image'),
  modal: document.querySelector('.modal'),
  // modalWrapper: document.querySelector('.modal_wrapper'),
  // movieTitle: document.querySelector('.movie_title'),
};

// console.log(refs.image);

//////////      Close modal     //////////
refs.foundList.addEventListener('click', onClickItem);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onCloseModalByEsc);


function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  refs.modal.innerHTML = '';

  window.removeEventListener('keydown', onCloseModayByEsc);
}

function onCloseModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
    // console.log(e.code);
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

//////////    Render Modal    //////////
function renderCardOfMovie(data) {
  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    poster_path,
  } = data;
  // const markup = `<p>${vote_average}</p>`;
  const genresOfMovie = genres.map(genres => genres.name);
  console.log(genresOfMovie.join(''));
  const markup = `
    <button type="button" class="btn-modal-close">Close</button>
    <div class='modal-movie'>
    <img
          class='modal-movie__img'
          src='https://image.tmdb.org/t/p/w500${poster_path}'
          alt='${original_title}'
        />
    </div>
    <div class='modal__content'>
        <h2 class='modal__title'>${title}</h2>
          <table class='modal-info'>
            <tr>
              <td class='modal-info__title'>Vote / Votes</td>
              <td class='modal-info__value'>
                <span class='modal-info__rate'>${vote_average}</span>
                /
                <span class='modal-info__rate'>${vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class='modal-info__title'>Popularity</td>
              <td class='modal-info__value'>${popularity.toFixed(1)}</td>
            </tr>
            <tr>
              <td class='modal-info__title'>Original Title</td>
              <td class='modal-info__value'>${original_title}</td>
            </tr>
            <tr>
              <td class='modal-info__title'>Genre</td>
              <td class='modal-movie-info__value'>${genresOfMovie.join(', ')}</td>
            </tr>
          </table>
      
          <div class='modal-about'>
            <h3 class='modal-about__title'>About</h3>
            <p class='modal-about__desc'>${overview}</p>
          </div>

          <div class="modal-movie-btn">
            <button class="btn-modal btn-modal__watched">add to Watched</button>
            <button class="btn-modal btn-modal__queue">add to queue</button>
        </div>
    </div>
        `;

  // const markup = `<div><img class="image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/></div>`;
  refs.modal.insertAdjacentHTML('beforeend', markup);


          // <h2>${title}</h2>
          // <p>Vote / Votes<span>${vote_average}</span> / <span>${vote_count}</span></p>
          // <p>Popularity<span>${popularity.toFixed(1)}</span></p>
          // <p>Original Title                        <span>${original_title}</span></p>
          // <p>Genre<span>${genresOfMovie.join(', ')}</span></p>
          // <h3>About</h3>
          // <p>${overview}</p>
}


function onClickItem(e) {
  const idOfImage = e.target.id;
  // console.log(e.target);
  if (e.target.nodeName === 'IMG') {
    getData(idOfImage);
    refs.backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    // refs.modal.style.display = "block";
    // refs.image.src = e.target.src;
    // console.log(e.target.alt);
    // refs.movieTitle.textContent = e.target.alt;
  }
}

// function onCloseModal() {
//   refs.backdrop.classList.add('is-hidden');
//   // refs.image.src = '';
//   refs.modal.innerHTML = '';
// }
