import { fetchBreeds,fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';


Notiflix.Notify.init({
    position: 'center-center',
    showOnlyTheLastOne: true,
});

const selectBreed = document.querySelector('.breed-select');
const parentEl = document.querySelector('.cat-info');
const loader = document.querySelector('.loader-hidden');
const errorEl = document.querySelector('.error-hidden');

loader.style.display = 'none';
selectBreed.style.display = 'none';
errorEl.style.display = 'none';
 
fetchBreeds().then(data => {
    data.forEach(breed => {
        selectBreed.style.display = 'block';
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectBreed.appendChild(option)
    });
    
}).catch(() => {
   Notiflix.Notify.info(" Oops! Something went wrong! Try reloading the page!");
});
            
selectBreed.addEventListener('change', () => {
    parentEl.style.display = 'none';
    const selectBreedId = selectBreed.value;
     loader.style.display = 'block';
    fetchCatByBreed(selectBreedId).then(data => {
        const html = data.map(cat => `
            <li>
                <img src="${cat.url}" alt="${cat.breeds[0].name}" width = 300 />
                <h2>${cat.breeds[0].name}</h2>
                <p>${cat.breeds[0].description}</p>
                <p>${cat.breeds[0].temperament}</p>
            </li>
        `).join('');
        parentEl.style.display = 'block';
        parentEl.innerHTML = html;
        console.log(data)
    }).catch(() => {
      Notiflix.Notify.info(" Oops! Something went wrong! Try reloading the page!");
    }).finally(() => {
        loader.style.display = 'none';
    });
});



