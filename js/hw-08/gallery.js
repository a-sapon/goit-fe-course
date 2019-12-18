import galleryItems from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

const li = createLi(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', li);

function createLi(arr) {
  return arr.reduce((acc, currentItem) => {
    acc += `
        <li class="gallery__item">
          <a class="gallery__link" href="${currentItem.original}">
            <img
            id='${currentItem.id}'
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

galleryList.addEventListener('click', openImage);
closeBtn.addEventListener('click', closeImage);
lightbox.addEventListener('click', closeByOverlay);

function openImage(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const clickedImg = e.target;
  const bigURL = clickedImg.dataset.source;
  const alt = clickedImg.alt;
  lightbox.classList.add('is-open');
  lightboxImage.src = bigURL;
  lightboxImage.alt = alt;

  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('keydown', handleArrow);
}

function closeImage() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';

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

let count = 1;

function handleArrow(e) {
  let step;
  if (e.code === 'ArrowLeft') {
    step = count--;
  } else if (e.code === 'ArrowRight') {
    step = count++;
  }
  if (step > 0) {
    const find = galleryItems.find(elem => {
      const getId = elem.id === +e.target.children[0].id + step;
      return getId;
    });
    const modal = document.querySelector('.lightbox__image');
    modal.src = find.original;
  }
}