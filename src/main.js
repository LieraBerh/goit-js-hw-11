//#region libraries

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

//#endregion

import { fetchData } from './js/pixabay-api';

const refs = {
  formEl: document.querySelector('#searchForm'),
  inputEl: document.querySelector('#searchInput'),
  submitBtn: document.querySelector('#submitButton'),
  searchRes: document.querySelector('#searchResults'),
};

refs.formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  if (!refs.inputEl.value) {
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
    });
    return;
  }
  const query = e.target.elements.query.value;

  fetchData(query)
    .then(data => {
      if (data.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Illegal operation',
        });
        return;
      }
      //   const markup = symbolTemplate(data);
      //   refs.searchRes.innerHTML = markup;
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
      });
      return;
    });

  e.target.reset();
}
