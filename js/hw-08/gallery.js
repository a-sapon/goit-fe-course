import galleryItems from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]')
};

const li = createLi(galleryItems);
refs.galleryList.insertAdjacentHTML('afterbegin', li);

function createLi(arr) {
  return arr.reduce((acc, currentItem) => {
    acc += `
        <li class="gallery__item">
          <a class="gallery__link" href="${currentItem.original}">
            <img
              class="gallery__image"
              src="${currentItem.preview}"
              data-source="${currentItem.original}"
              alt="${currentItem.description}"
            />
          </a>
        </li>`;
    return acc;
  }, '');
}

refs.galleryList.addEventListener('click', openImage);
refs.closeBtn.addEventListener('click', closeImage);
refs.lightbox.addEventListener('click', closeByOverlay);

function openImage(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const clickedImg = e.target;
  const bigURL = clickedImg.dataset.source;
  const alt = clickedImg.alt;
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = bigURL;
  refs.lightboxImage.alt = alt;

  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('keydown', handleArrow);
}

function closeImage() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';
  refs.lightboxImage.alt = '';

  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('keydown', handleArrow);
}

function closeByOverlay(e) {
  if (e.target.nodeName !== 'DIV') {
    return;
  }
  closeImage();
}

function handleKeydown(e) {
  if (e.code === 'Escape') {
    closeImage();
  } else {
    return;
  }
}

function handleArrow(e) {
  if (e.code === 'ArrowLeft') {
    const currentSrc = refs.lightboxImage.src;
    const matchingObj = galleryItems.find(elem => elem.original === currentSrc);
    let resultIdx = galleryItems.indexOf(matchingObj) - 1;
    if (resultIdx < 0) {
      resultIdx = galleryItems.length - 1;
    }
    refs.lightboxImage.src = galleryItems[resultIdx].original;
  } else if (e.code === 'ArrowRight') {
    const currentSrc = refs.lightboxImage.src;
    const matchingObj = galleryItems.find(elem => elem.original === currentSrc);
    let resultIdx = galleryItems.indexOf(matchingObj) + 1;
    if (resultIdx > galleryItems.length - 1) {
      resultIdx = 0;
    }
    refs.lightboxImage.src = galleryItems[resultIdx].original;
  }
}