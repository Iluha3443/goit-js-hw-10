import { fetchBreeds,fetchCatByBreed } from './cat-api.js';



const selectBreed = document.querySelector('.breed-select');
const parentEl = document.querySelector('.cat-info');

fetchBreeds().then(data => {
    data.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectBreed.appendChild(option)
    });
})

selectBreed.addEventListener('change',() => {
    const selectBreedId = selectBreed.value;
    fetchCatByBreed(selectBreedId).then(data => console.log(data));
});




// fetchCatByBreed()

