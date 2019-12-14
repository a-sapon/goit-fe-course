const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  }
];

const gallery = document.getElementById('gallery');
gallery.style.display = 'flex';

images.forEach(obj => {
  const li = document.createElement('li');
  gallery.appendChild(li);
  li.insertAdjacentHTML(
    'afterbegin',
    `<img width="300px" height="200px" src=${obj.url} alt=${obj.alt}>`
  );
  li.style.marginRight = '10px';
})